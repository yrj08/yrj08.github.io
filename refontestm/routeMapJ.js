// routeMap.js

function createRouteMap(config) {

  const {
    geojsonFile,
    branchStyles = {}
  } = config;

  const map = L.map('map').setView([45.5526446, -73.7279665], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // ---------------- GLOBAL ----------------

  let stopIndex = {};
  let overlayMaps = {};
  let bounds = L.latLngBounds();

  // ---------------- DEFAULT STYLES ----------------

  const defaultOutboundStyle = {
    color: "#000000",
    weight: 4,
    radius: 4,
    borderWeight: 3,
    shape: "circle",
    dashArray: null
  };

  const defaultInboundStyle = {
    color: "#6f6f6f",
    weight: 4,
    radius: 4,
    borderWeight: 3,
    shape: "circle",
    dashArray: null
  };

  // ---------------- STYLE HELPER ----------------

  function getBranchStyle(feature) {

    const branch = feature.properties.branch;
    const direction = feature.properties.direction;

    const baseStyle =
      direction === "inbound"
        ? defaultInboundStyle
        : defaultOutboundStyle;

    const userStyle = branchStyles[branch] || {};

    return { ...baseStyle, ...userStyle };
  }

  // ---------------- LINE STYLE ----------------

  function routeStyle(feature) {
    const s = getBranchStyle(feature);

    return {
      color: s.color,
      weight: s.weight,
      dashArray: s.dashArray || null,
      opacity: s.opacity || 1
    };
  }

  // ---------------- MARKERS ----------------

  function createMarker(latlng, branchStyle) {

    const baseOptions = {
      radius: branchStyle.radius || 4,
      fillColor: "white",
      color: branchStyle.color,
      weight: branchStyle.borderWeight || 3,
      fillOpacity: 1
    };

    if (!branchStyle.shape || branchStyle.shape === "circle") {
      return L.circleMarker(latlng, baseOptions);
    }

    if (branchStyle.shape === "square") {
      return L.marker(latlng, {
        icon: L.divIcon({
          className: "",
          html: `<div style="
            width:${baseOptions.radius * 2}px;
            height:${baseOptions.radius * 2}px;
            background:white;
            border:${baseOptions.weight}px solid ${baseOptions.color};
          "></div>`
        })
      });
    }

    if (branchStyle.shape === "triangle") {
      return L.marker(latlng, {
        icon: L.divIcon({
          className: "",
          html: `<div style="
            width:0;
            height:0;
            border-left:${baseOptions.radius}px solid transparent;
            border-right:${baseOptions.radius}px solid transparent;
            border-bottom:${baseOptions.radius * 2}px solid ${baseOptions.color};
          "></div>`
        })
      });
    }

    return L.circleMarker(latlng, baseOptions);
  }

  function createStopMarker(stopFeature, lineFeature) {

    const branchStyle = getBranchStyle(lineFeature);

    return createMarker(
      [
        stopFeature.geometry.coordinates[1],
        stopFeature.geometry.coordinates[0]
      ],
      branchStyle
    ).bindPopup(stopFeature.properties.name);
  }

  // ---------------- LOAD STOPS ----------------

  fetch("stops.geojson")
    .then(res => res.json())
    .then(stopData => {

      stopData.features.forEach(f => {
        stopIndex[f.properties.stop_id] = f;
      });

      loadRoutes(); // IMPORTANT

    });

  // ---------------- LOAD ROUTES ----------------

  function loadRoutes() {

    fetch(geojsonFile)
      .then(res => res.json())
      .then(data => {

        data.features.forEach(feature => {

          if (feature.geometry.type !== "LineString") return;

          const headsign = feature.properties.headsign || "Unnamed";
          const stopIds = feature.properties.stops || [];

          // Layer per branch
          const branchLayer = L.layerGroup();

          // ---- LINE ----
          const lineLayer = L.geoJSON(feature, {
            style: routeStyle
          });

          branchLayer.addLayer(lineLayer);
          bounds.extend(lineLayer.getBounds());

          // ---- STOPS ----
          stopIds.forEach(id => {

            const stopFeature = stopIndex[id];
            if (!stopFeature) return;

            const marker = createStopMarker(stopFeature, feature);
            branchLayer.addLayer(marker);

          });

          // Add to map
          branchLayer.addTo(map);

          // Add to control
          overlayMaps[headsign] = branchLayer;

        });

        // ---- CONTROLS ----
        L.control.layers(null, overlayMaps).addTo(map);

        // ---- AUTO ZOOM ----
        if (bounds.isValid()) {
          map.fitBounds(bounds);
        }

      });
  }

}
