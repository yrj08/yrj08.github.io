function createNetworkMap({ mapId, routeConfigs }) {

  const map = L.map(mapId).setView([45.55, -73.7], 11);

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
        radius: 5,
        color: "#000",
        fillColor: "#fff",
        fillOpacity: 1
      });

      marker.bindPopup(
        visible.map(s => `${s.routeId} ${s.headsign}`).join("<br>")
      );

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

        line.on("click", () => {
          line.setStyle({ weight: 8 });
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
