let highlightedLayers = [];

function createNetworkMap({ mapId, routeConfigs }) {

  const map = L.map(mapId).setView([45.55, -73.7], 11);
  map.on("click", () => {
    highlightedLayers.forEach(l => l.setStyle(l.defaultStyle));
    highlightedLayers = [];
    map.closePopup();
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const activeRoutes = new Set();
  const routeLayers = {};
  const stops = {};

  const stopLayer = L.layerGroup().addTo(map);

  function safeFetch(url) {
    if (!url) return Promise.resolve(null);
    return fetch(url).then(r => r.ok ? r.json() : null).catch(() => null);
  }

  function getStopFeature(id, newStops, oldStops) {
    return newStops?.features.find(f => f.properties.stop_id === id)
        || oldStops?.features.find(f => f.properties.stop_id === id)
        || null;
  }

  function registerStop(stopId, feature, routeId, headsign) {
    if (!stops[stopId]) {
      stops[stopId] = {
        coords: [
          feature.geometry.coordinates[1],
          feature.geometry.coordinates[0]
        ],
        name: feature.properties.stop_name,
        services: []
      };
    }

    stops[stopId].services.push({ routeId, headsign });
  }

  function updateStops() {
    stopLayer.clearLayers();

    Object.values(stops).forEach(stop => {
      const visible = stop.services.filter(s =>
        activeRoutes.has(s.routeId)
      );

      if (visible.length === 0) return;

      const marker = L.circleMarker(stop.coords, {
        radius: 4,
        color: "#000",
        fillColor: "#fff",
        fillOpacity: 1
      });

      const stopName = stop.name;
      
      const html = `
        <div style="font-size:16px; font-weight:bold; margin-bottom:6px;">
          ${stopName}
        </div>
        ${visible
          .sort((a, b) => a.routeId.localeCompare(b.routeId, undefined, { numeric: true }))
          .map(s => {
          const cfg = routeConfigs[s.routeId];
          const color =
            Object.values(cfg.branchStyles || {})[0]?.line?.color || "#333";
      
          return `
            <div style="margin:3px 0;">
              <span style="
                display:inline-block;
                min-width:32px;
                text-align:center;
                background:${color};
                color:#fff;
                font-weight:bold;
                border-radius:4px;
                padding:2px 6px;
                margin-right:6px;
              ">
                ${s.routeId}
              </span>
              ${s.headsign}
            </div>
          `;
        }).join("")}
      `;
      
      marker.bindPopup(html);

      stopLayer.addLayer(marker);
    });
  }

  const loadPromises = Object.entries(routeConfigs).map(([routeId, cfg]) => {

    const group = L.layerGroup();
    routeLayers[cfg.title] = group;

    return Promise.all([
      safeFetch(cfg.files.newShapes),
      safeFetch(cfg.files.newStops),
      safeFetch(cfg.files.currentStops)
    ]).then(([shapes, newStops, oldStops]) => {

      if (!shapes) return;

      shapes.features.forEach(f => {
        if (f.properties.variant !== "main") return;

        const style = cfg.branchStyles?.[f.properties.branch]?.line || {
          color: "#0077ff",
          weight: 4
        };

        const line = L.geoJSON(f, { style });

        line.on("click", (e) => {
          L.DomEvent.stopPropagation(e);
        
          // Reset previous highlight
          highlightedLayers.forEach(l => l.setStyle(l.defaultStyle));
          highlightedLayers = [];
        
          const direction = f.properties.direction;
          const label =
            cfg.directionLabels?.[direction] || direction;
        
          group.eachLayer(layer => {
            if (!layer.feature) return;
        
            if (layer.feature.properties.direction === direction) {
              layer.defaultStyle = layer.options.style || layer.options;
        
              layer.setStyle({
                weight: 8,
                color: "#ffff00",
                opacity: 1
              });
        
              highlightedLayers.push(layer);
            }
          });
        
          L.popup()
            .setLatLng(e.latlng)
            .setContent(`<b>${cfg.title}</b><br>${label}`)
            .openOn(map);
        });

        group.addLayer(line);

        (f.properties.stops || []).forEach(stopId => {
          const sf = getStopFeature(stopId, newStops, oldStops);
          if (!sf) return;

          registerStop(stopId, sf, routeId, f.properties.headsign);
        });
      });

    });
  });

  Promise.all(loadPromises).then(() => {

    const control = L.control.layers(null, routeLayers).addTo(map);

    Object.entries(routeLayers).forEach(([name, layer]) => {
      layer.addTo(map);
      activeRoutes.add(Object.keys(routeConfigs).find(r => routeConfigs[r].title === name));
    });

    map.on("overlayadd", e => {
      const routeId = Object.keys(routeConfigs)
        .find(r => routeConfigs[r].title === e.name);
      activeRoutes.add(routeId);
      updateStops();
    });

    map.on("overlayremove", e => {
      const routeId = Object.keys(routeConfigs)
        .find(r => routeConfigs[r].title === e.name);
      activeRoutes.delete(routeId);
      updateStops();
    });

    updateStops();
  });
}
