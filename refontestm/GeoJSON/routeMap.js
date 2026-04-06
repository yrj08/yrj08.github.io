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
    checkboxContainerId = "controls"
  } = config;

  const map = L.map(mapId).setView(center, zoom);

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
    const group = L.layerGroup();
  
    const stopStyle = branchStyles[branch]?.stop || {};
  
    stopIds.forEach(id => {
      const stopFeature = stopLookup[datasetType][id];
      if (!stopFeature) return;
  
      const coords = stopFeature.geometry.coordinates;
      const name = stopFeature.properties.stop_name;
  
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
          fillOpacity: fillOpacity
        });
      }
  
      marker.bindPopup(name);
      group.addLayer(marker);
    });
  
    return group;
  }

  function createStopLayer(stopIds, datasetType, color) {
    const group = L.layerGroup();

    stopIds.forEach(id => {
      const stopFeature = stopLookup[datasetType][id];
      if (!stopFeature) return;

      const coords = stopFeature.geometry.coordinates;
      const name = stopFeature.properties.stop_name;

      const marker = L.circleMarker([coords[1], coords[0]], {
        radius: 5,
        color: color,
        fillOpacity: 1
      });

      marker.bindPopup(name);
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

      const line = L.geoJSON(feature, {
        style: style
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
    const container = document.getElementById(checkboxContainerId);

    Object.entries(branchGroupsCombined).forEach(([branch, data]) => {
      const id = `chk_${branch}`;

      const wrapper = document.createElement("div");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.checked = true;

      const label = document.createElement("label");
      label.htmlFor = id;
      label.innerText = data.headsign || branch;

      checkbox.onchange = () => {
        if (checkbox.checked) {
          data.group.addTo(map);
        } else {
          map.removeLayer(data.group);
        }
      };

      wrapper.appendChild(checkbox);
      wrapper.appendChild(label);
      container.appendChild(wrapper);

      // Add by default
      data.group.addTo(map);
    });
  }

  // Load everything
  Promise.all([
    fetch(currentShapes).then(r => r.json()),
    fetch(newShapes).then(r => r.json()),
    fetch(currentStops).then(r => r.json()),
    fetch(newStops).then(r => r.json())
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
  });
}
