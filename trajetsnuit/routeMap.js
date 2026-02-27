// routeMap.js

function createRouteMap(config) {

  const {
    geojsonFile,
    outboundRouteLabel,
    inboundRouteLabel,
    outboundStopsLabel,
    inboundStopsLabel,
    branchStyles = {}   // <-- NEW
  } = config;

  const map = L.map('map').setView([45.5017, -73.5673], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);


  // ---------------- STYLE HELPERS ----------------

  function getBranchStyle(feature) {
    const branch = feature.properties.branch;
    return branchStyles[branch] || {};
  }


  // ROUTE STYLE
  function outboundrouteStyle(feature) {
    const branchStyle = getBranchStyle(feature);

    return {
      color: branchStyle.color || feature.properties.color || "#000000",
      weight: branchStyle.weight || 4,
      dashArray: branchStyle.dashArray || null
    };
  }

  function inboundrouteStyle(feature) {
    const branchStyle = getBranchStyle(feature);

    return {
      color: branchStyle.color || feature.properties.color || "#6f6f6f",
      weight: branchStyle.weight || 4,
      dashArray: branchStyle.dashArray || null
    };
  }


  // MARKER SHAPES
  function createMarker(latlng, branchStyle) {

    const baseOptions = {
      radius: branchStyle.radius || 4,
      fillColor: "white",
      color: branchStyle.color || "#000000",
      weight: branchStyle.borderWeight || 3,
      fillOpacity: 1
    };

    // Default: circle
    if (!branchStyle.shape || branchStyle.shape === "circle") {
      return L.circleMarker(latlng, baseOptions);
    }

    // Square
    if (branchStyle.shape === "square") {
      return L.marker(latlng, {
        icon: L.divIcon({
          className: "",
          html: `
            <div style="
              width:${baseOptions.radius * 2}px;
              height:${baseOptions.radius * 2}px;
              background:white;
              border:${baseOptions.weight}px solid ${baseOptions.color};
            "></div>
          `
        })
      });
    }

    // Triangle
    if (branchStyle.shape === "triangle") {
      return L.marker(latlng, {
        icon: L.divIcon({
          className: "",
          html: `
            <div style="
              width: 0;
              height: 0;
              border-left: ${baseOptions.radius}px solid transparent;
              border-right: ${baseOptions.radius}px solid transparent;
              border-bottom: ${baseOptions.radius * 2}px solid ${baseOptions.color};
            "></div>
          `
        })
      });
    }

    return L.circleMarker(latlng, baseOptions);
  }


  function outboundStopStyle(feature, latlng) {
    const branchStyle = getBranchStyle(feature);
    return createMarker(latlng, branchStyle);
  }

  function inboundStopStyle(feature, latlng) {
    const branchStyle = getBranchStyle(feature);
    return createMarker(latlng, branchStyle);
  }


  function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name);
    }
  }


  // ---------------- EMPTY LAYERS ----------------

  const outboundroutesLayer = L.geoJSON(null, {
    style: outboundrouteStyle
  });

  const inboundroutesLayer = L.geoJSON(null, {
    style: inboundrouteStyle
  });

  const outboundStopsLayer = L.geoJSON(null, {
    pointToLayer: outboundStopStyle,
    onEachFeature: onEachFeature
  });

  const inboundStopsLayer = L.geoJSON(null, {
    pointToLayer: inboundStopStyle,
    onEachFeature: onEachFeature
  });


  // ---------------- LOAD GEOJSON ----------------

  fetch(geojsonFile)
    .then(res => res.json())
    .then(data => {

      const outboundroutes = [];
      const inboundroutes = [];
      const outboundStops = [];
      const inboundStops = [];

      data.features.forEach(f => {

        if (f.geometry.type === "LineString") {
          if (f.properties.direction === "outbound") outboundroutes.push(f);
          if (f.properties.direction === "inbound") inboundroutes.push(f);
        }

        if (f.geometry.type === "Point") {
          if (f.properties.direction === "outbound") outboundStops.push(f);
          if (f.properties.direction === "inbound") inboundStops.push(f);
        }

      });

      outboundroutesLayer.addData(outboundroutes);
      inboundroutesLayer.addData(inboundroutes);
      outboundStopsLayer.addData(outboundStops);
      inboundStopsLayer.addData(inboundStops);

      outboundroutesLayer.addTo(map);
      inboundroutesLayer.addTo(map);
      outboundStopsLayer.addTo(map);
      inboundStopsLayer.addTo(map);

      if (outboundroutesLayer.getBounds().isValid()) {
        map.fitBounds(outboundroutesLayer.getBounds());
      }

    });


  const overlayMaps = {
    [outboundRouteLabel]: outboundroutesLayer,
    [inboundRouteLabel]: inboundroutesLayer,
    [outboundStopsLabel]: outboundStopsLayer,
    [inboundStopsLabel]: inboundStopsLayer
  };

  L.control.layers(null, overlayMaps).addTo(map);
}
