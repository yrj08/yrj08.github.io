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
    branchColors = {},

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

    const overrideColor = branchColors[branch];

    let color = overrideColor || (datasetType === "current" ? "#666" : "#0077ff");

    let weight = 4;
    let opacity = 1;

    if (datasetType === "current") {
      weight = 6;
      opacity = 0.3;
    }

    if (direction === "inbound") {
      opacity *= 0.6;
    }

    return {
      color,
      weight,
      opacity
    };
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
