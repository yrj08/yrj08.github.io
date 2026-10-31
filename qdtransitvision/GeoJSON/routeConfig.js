window.routeConfigs = {

  "M1": {title: "地铁1号线", type: "metro",
    files: {currentShapes: "../GeoJSON/curr-M1.geojson", newShapes: "../GeoJSON/M1.geojson", 
            currentStops: "../GeoJSON/oldstops.geojson", newStops: "../GeoJSON/newstops.geojson"},
    directionLabels: {outbound: "王家港 ⇋ 兴国路"},
    branchStyles: {
      "verte": {line: {color: "#00B300", weight: 7, opacity: 1},
          stop: {radius: 7, weight: 3, color: "#00B300", fillOpacity: 1, shape: "circle"}}},
    changements: ``,
    pourquoi: ``}
  
};
