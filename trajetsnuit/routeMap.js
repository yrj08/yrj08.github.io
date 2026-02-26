function createRouteMap(config) {

  const {
    geojsonFile,
    outboundRouteLabel,
    inboundRouteLabel,
    outboundStopsLabel,
    inboundStopsLabel
  } = config;

  // ---------------- MAP ----------------

const map = L.map('map').setView([45.5017, -73.5673], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// ---------------- STYLE FUNCTIONS ----------------

// Outbound line style
function outboundrouteStyle(feature) {
  return {
    color: feature.properties.color || "#000000",
    weight: 4
  };
}

// Inbound line style
function inboundrouteStyle(feature) {
  return {
    color: feature.properties.color || "#6f6f6f",
    weight: 4
  };
}

// Outbound stops
function outboundStopStyle(feature, latlng) {
  return L.circleMarker(latlng, {
    radius: 4,
    fillColor: "white",
    color: "#000000",
    weight: 3,
    fillOpacity: 1
  });
}

// Inbound stops
function inboundStopStyle(feature, latlng) {
  return L.circleMarker(latlng, {
    radius: 4,
    fillColor: "white",
    color: "#6f6f6f",
    weight: 3,
    fillOpacity: 1
  });
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


// ---------------- POPUPS ----------------

function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties.name) {
    layer.bindPopup(feature.properties.name);
  }
}


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
        if (f.properties.direction === "outbound") {
          outboundroutes.push(f);
        }

        if (f.properties.direction === "inbound") {
          inboundroutes.push(f);
        }
      }

      if (f.geometry.type === "Point") {
        if (f.properties.direction === "outbound") {
          outboundStops.push(f);
        }

        if (f.properties.direction === "inbound") {
          inboundStops.push(f);
        }
      }

    });

    outboundroutesLayer.addData(outboundroutes);
    inboundroutesLayer.addData(inboundroutes);
    outboundStopsLayer.addData(outboundStops);
    inboundStopsLayer.addData(inboundStops);

    // Add to map
    outboundroutesLayer.addTo(map);
    inboundroutesLayer.addTo(map);
    outboundStopsLayer.addTo(map);
    inboundStopsLayer.addTo(map);

    // Zoom to data
    map.fitBounds(outboundroutesLayer.getBounds());

  });


// ---------------- LAYER CONTROL ----------------

const overlayMaps = {
    [outboundRouteLabel]: outboundroutesLayer,
    [inboundRouteLabel]: inboundroutesLayer,
    [outboundStopsLabel]: outboundStopsLayer,
    [inboundStopsLabel]: inboundStopsLayer
  };

L.control.layers(null, overlayMaps).addTo(map);

}
