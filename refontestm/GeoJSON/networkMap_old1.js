let highlightedLayers = [];
const allLineLayers = [];

function createNetworkMap({ mapId, routeConfigs }) {

  const map = L.map(mapId).setView([45.55, -73.7], 11);
  map.on("click", () => {
    highlightedLayers.forEach(l => l.setStyle(l.defaultStyle));
    highlightedLayers = [];
    updateStops();
    map.closePopup();
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const activeRoutes = new Set();
  const routeLayers = {};
  const stops = {};

  const stopLayer = L.layerGroup().addTo(map);

  const ROUTE_TYPE_STYLES = {
    regulier:         {color: "#009EE0"},
    pointe:           {color: "#5DBDEA"},
    frequent_journee: {color: "#781B7D"},
    frequent_pointe:  {color: "#8B469E"},
    nuit:             {color: "#000000"},
    saisonnier:       {color: "#FF9300"},
    lourd_verte:      {color: "#00B300", weight: 7},
    lourd_orange:     {color: "#D95700", weight: 7},
    lourd_rem:        {color: "#73A400", weight: 7},
    lourd_jaune:      {color: "#FFD900", weight: 7},
    lourd_bleue:      {color: "#0095E6", weight: 7},
    lourd_vh:         {color: "#F16179"},
    lourd_sj:         {color: "#FBD06C"},
    lourd_sh:         {color: "#999AC6"},
    lourd_ca:         {color: "#5AB6B2"},
    lourd_ma:         {color: "#CA5898"}
  };
  
  function safeFetch(url) {
    if (!url) return Promise.resolve(null);
    return fetch(url).then(r => r.ok ? r.json() : null).catch(() => null);
  }

  function getStopFeature(id, newStops, oldStops) {
    return newStops?.features.find(f => f.properties.stop_id === id)
        || oldStops?.features.find(f => f.properties.stop_id === id)
        || null;
  }

  function registerStop(stopId, feature, routeId, headsign, direction) {
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

    const exists = stops[stopId].services.some(
      s =>
        s.routeId === routeId &&
        s.direction === direction
    );
    
    if (!exists) {
      stops[stopId].services.push({
        routeId,
        headsign,
        direction
      });
    }
  }

  function updateStops() {
    stopLayer.clearLayers();

    Object.values(stops).forEach(stop => {
      const visible = stop.services.filter(s =>
        activeRoutes.has(s.routeId)
      );

      const isHighlighted = visible.some(s =>
        highlightedLayers.some(l =>
          l._routeMeta.routeId === s.routeId &&
          l._routeMeta.direction === s.direction
        )
      );

      if (visible.length === 0) return;

      const marker = L.circleMarker(stop.coords, {
        radius: isHighlighted ? 5 : 4,
        color: isHighlighted ? "#ff0000" : "#000",
        fillColor: "#fff",
        fillOpacity: 1,
        weight: isHighlighted ? 4 : 3
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
            ROUTE_TYPE_STYLES[cfg.type]?.color || "#333";
      
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
        if (["cancelled", "temporary", "short"].includes(f.properties.variant)) return;

        const base = ROUTE_TYPE_STYLES[cfg.type] || { color: "#333" };
        
        const style = {
          color: base.color,
          weight: base.weight || 4,
          opacity: f.properties.direction === "inbound" ? 0.6 : 1
        };

        const line = L.geoJSON(f, { style });
        
        line.eachLayer(l => {
          l._routeMeta = {
            routeId: routeId,
            direction: f.properties.direction
          };
        
          l.defaultStyle = { ...style };
          allLineLayers.push(l);
        });

        line.on("click", (e) => {
          L.DomEvent.stopPropagation(e);
        
          // Reset previous highlight
          highlightedLayers.forEach(l => l.setStyle(l.defaultStyle));
          highlightedLayers = [];
        
          const clickedDirection = f.properties.direction;
          const clickedRouteId = routeId;
        
          const directionLabel =
            cfg.directionLabels?.[clickedDirection] || clickedDirection;
        
          // Highlight all same route + same direction
          allLineLayers.forEach(l => {
            if (
              l._routeMeta.routeId === clickedRouteId &&
              l._routeMeta.direction === clickedDirection
            ) {
              l.setStyle({
                color: "#ffff00",
                weight: 8,
                opacity: 1
              });
        
              highlightedLayers.push(l);
            }
          });
        
          updateStops(); // refresh stop highlighting
        
          L.popup()
            .setLatLng(e.latlng)
            .setContent(`
              <b>${cfg.title}</b><br>
              ${directionLabel}
            `)
            .openOn(map);
        });

        group.addLayer(line);

        (f.properties.stops || []).forEach(stopId => {
          const sf = getStopFeature(stopId, newStops, oldStops);
          if (!sf) return;

          registerStop(
            stopId,sf,routeId,
            f.properties.headsign,
            f.properties.direction
          );
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
