window.routeConfigs = {

  "16": {title: "Ligne 16 • Graham",

    files: {
      currentShapes: "../GeoJSON/curr-16.geojson",
      newShapes: "../GeoJSON/16.geojson",
      currentStops: "../GeoJSON/oldstops.geojson",
      newStops: "../GeoJSON/newstops.geojson"},

    directionLabels: {outbound: "Est", inbound: "Ouest"},
    
    branchStyles: {
      "168888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "169999": {line: {color: "#5DBDEA", weight: 4, opacity: 0.8},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},

    changements: `
      <li></li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,

    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `
  },
  
  "117": {title: "Ligne 117 • O'Brien",

    files: {
      currentShapes: "../GeoJSON/curr-117.geojson",
      newShapes: "../GeoJSON/117.geojson",
      currentStops: "../GeoJSON/oldstops.geojson",
      newStops: "../GeoJSON/newstops.geojson"},

    directionLabels: {outbound: "Nord", inbound: "Sud"},
    
    branchStyles: {
      "1178888": {line: {color: "#009EE0", weight: 4, opacity: 1},
          stop: {radius: 4, weight: 3, color: "#009EE0", fillOpacity: 1, shape: "circle"}},
      "1179999": {line: {color: "#5DBDEA", weight: 4, opacity: 0.8},
          stop: {radius: 4, weight: 3, color: "#5DBDEA", fillOpacity: 1, shape: "circle"}},
      "current": {line: {color: "#FFB350", weight: 10, opacity: 1},
          stop: {radius: 5, weight: 5, color: "#FFB350", fillOpacity: 1, shape: "circle"}}},

    changements: `
      <li>Aucune modification de trajet;</li>
      <li>Retrait de quelques arrêts trop rapprochés.</li>
    `,

    pourquoi: `
      <li>Améliorer la vitesse commerciale.</li>
    `
  }
};
