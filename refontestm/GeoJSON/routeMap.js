// routeMap.js

function createRouteMap(config) {
  const {
    mapId = "map",
    center = [45.55, -73.7],
    zoom = 12,

    // GeoJSON inputs
    currentShapes,
    newShapes,
    currentStops,
    newStops,

    // Optional overrides
    branchStyles = {},

    // UI container
    checkboxContainerId = "controls",
    directionLabels = {}   // 👈 ADD THIS
  } = config;

  const map = L.map(mapId).setView(center, zoom);

  map.createPane('pane_current_lines');
  map.getPane('pane_current_lines').style.zIndex = 200;
  
  map.createPane('pane_current_stops');
  map.getPane('pane_current_stops').style.zIndex = 300;
  
  map.createPane('pane_new_lines');
  map.getPane('pane_new_lines').style.zIndex = 400;
  
  map.createPane('pane_new_stops');
  map.getPane('pane_new_stops').style.zIndex = 500;
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  // Store stop lookup tables
  const stopLookup = {
    current: {},
    new: {}
  };

  function buildStopLookup(stopGeojson, type) {
    stopGeojson.features.forEach(f => {
      stopLookup[type][f.properties.stop_id] = f;
    });
  }

  function getStopFeature(stopId, datasetType) {
    if (datasetType === "new") {
      return (
        stopLookup.new[stopId] ||
        stopLookup.current[stopId] ||
        null
      );
    }
  
    if (datasetType === "current") {
      return stopLookup.current[stopId] || null;
    }
  
    return null;
  }
  
  // Styling logic
  function getBranchStyle(feature, datasetType) {
    const props = feature.properties;
    const branch = props.branch;
    const direction = props.direction;
  
    const overrides = branchStyles[branch]?.line || {};
  
    let baseStyle = {
      color: datasetType === "current" ? "#666" : "#0077ff",
      weight: datasetType === "current" ? 6 : 4,
      opacity: datasetType === "current" ? 0.3 : 1
    };
  
    if (direction === "inbound") {
      baseStyle.opacity *= 0.6;
    }
  
    return { ...baseStyle, ...overrides };
  }

  function createStopLayer(stopIds, datasetType, branch, lineColor) {
    const paneName =
      datasetType === "current"
        ? "pane_current_stops"
        : "pane_new_stops";
    
    const group = L.layerGroup();
  
    const stopStyle = branchStyles[branch]?.stop || {};
  
    stopIds.forEach(id => {
      const stopFeature = getStopFeature(id, datasetType);
      if (!stopFeature) return;
  
      const coords = stopFeature.geometry.coordinates;
      const popupHtml = formatStopName(stopFeature.properties);
  
      const color = stopStyle.color || lineColor;
      const radius = stopStyle.radius || 5;
      const fillOpacity = stopStyle.fillOpacity ?? 1;
      const shape = stopStyle.shape || "circle";
  
      let marker;
  
      if (shape === "square") {
        const size = radius * 2;
  
        marker = L.rectangle([
          [coords[1] - 0.0002, coords[0] - 0.0002],
          [coords[1] + 0.0002, coords[0] + 0.0002]
        ], {
          color: color,
          weight: 1,
          fillOpacity: fillOpacity
        });
      } else {
        marker = L.circleMarker([coords[1], coords[0]], {
          radius: radius,
          color: color,
          fillColor: "#ffffff",
          fillOpacity: fillOpacity,
          weight: stopStyle.weight || 1,
          pane: paneName
        });
      }
  
      marker.bindPopup(popupHtml);
      group.addLayer(marker);
    });
  
    return group;
  }

  function processShapes(shapeGeojson, datasetType) {
    const branchGroups = {};

    shapeGeojson.features.forEach(feature => {
      const props = feature.properties;
      const branch = props.branch;
      const headsign = props.headsign;

      if (!branchGroups[branch]) {
        branchGroups[branch] = {
          group: L.layerGroup(),
          headsign
        };
      }

      const style = getBranchStyle(feature, datasetType);

      const paneName =
        datasetType === "current"
          ? "pane_current_lines"
          : "pane_new_lines";
      
      const line = L.geoJSON(feature, {
        style: style,
        pane: paneName
      });

      branchGroups[branch].group.addLayer(line);

      const stopLayer = createStopLayer(
        props.stops || [],
        datasetType,
        branch,
        style.color
      );

      branchGroups[branch].group.addLayer(stopLayer);
    });

    return branchGroups;
  }

  function buildCheckboxUI(branchGroupsCombined) {
    const overlays = {};
  
    Object.entries(branchGroupsCombined).forEach(([branch, data]) => {
      const label = data.headsign || branch;
      overlays[label] = data.group;
    });
  
    L.control.layers(null, overlays, {
      collapsed: true   // 👈 gives you the small icon
    }).addTo(map);
  
    // Add all layers by default
    Object.values(branchGroupsCombined).forEach(d => d.group.addTo(map));
  }

  function fetchGeoJSON(url) {
    if (!url) {
      return Promise.resolve({ type: "FeatureCollection", features: [] });
    }
  
    return fetch(url)
      .then(res => {
        if (!res.ok) {
          console.warn(`Failed to load ${url}`);
          return { type: "FeatureCollection", features: [] };
        }
        return res.json();
      })
      .catch(err => {
        console.warn(`Error loading ${url}`, err);
        return { type: "FeatureCollection", features: [] };
      });
  }
  
  // Load everything
  Promise.all([
    fetchGeoJSON(currentShapes),
    fetchGeoJSON(newShapes),
    fetchGeoJSON(currentStops),
    fetchGeoJSON(newStops)
  ]).then(([currShapes, newShapesData, currStops, newStopsData]) => {

    buildStopLookup(currStops, "current");
    buildStopLookup(newStopsData, "new");

    const currentBranches = processShapes(currShapes, "current");
    const newBranches = processShapes(newShapesData, "new");

    // Merge both datasets into one toggle system
    const combined = {};

    function mergeBranches(source) {
      Object.entries(source).forEach(([branch, data]) => {
        if (!combined[branch]) {
          combined[branch] = {
            group: L.layerGroup(),
            headsign: data.headsign
          };
        }
        combined[branch].group.addLayer(data.group);
      });
    }

    mergeBranches(currentBranches);
    mergeBranches(newBranches);

    buildCheckboxUI(combined);

    function computeBounds(geojsonList) {
      const bounds = L.latLngBounds();
    
      geojsonList.forEach(gj => {
        gj.features.forEach(f => {
          const geom = f.geometry;
    
          if (!geom) return;
    
          const coords = geom.coordinates;
    
          function addCoords(c) {
            if (typeof c[0] === "number") {
              bounds.extend([c[1], c[0]]);
            } else {
              c.forEach(addCoords);
            }
          }
    
          addCoords(coords);
        });
      });
    
      return bounds;
    }
    
    const bounds = computeBounds([currShapes, newShapesData]);
    
    if (bounds.isValid()) {
      map.fitBounds(bounds, {
        padding: [20, 20],
        maxZoom: 16
      });
    }
    
    // --- Generate stop tables
    
    const preferredOrder = ["outbound", "inbound"];
    
    const directions = [
      ...preferredOrder.filter(d =>
        newShapesData.features.some(f => f.properties.direction === d)
      ),
      ...new Set(
        newShapesData.features
          .map(f => f.properties.direction)
          .filter(d => d != null && !preferredOrder.includes(d))
      )
    ];
    
    // Customize labels per page
    
    // Limit to max 2 directions (your design)
    const leftDir = directions[0];
    const rightDir = directions[1];
    
    // LEFT COLUMN
    if (leftDir) {
      document.getElementById("title-left").innerText =
        directionLabels[leftDir] || leftDir;
    
      generateStopTable({
        shapes: newShapesData,
        stopsLookup: stopLookup,
        direction: leftDir,
        containerId: "table-left",
        directionLabels: directionLabels
      });

    // RIGHT COLUMN
    if (rightDir) {
      document.getElementById("title-right").innerText =
        directionLabels[rightDir] || rightDir;
    
      generateStopTable({
        shapes: newShapesData,
        stopsLookup: stopLookup,
        direction: rightDir,
        containerId: "table-right",
        directionLabels: directionLabels
      });
    
    // Optional: hide right column if unused
    if (!rightDir) {
      document.getElementById("table-right").parentElement.style.display = "none";
    }
  });
}
