let highlightedLayers = [];
const allLineLayers = [];

function createNetworkMap({ mapId, routeConfigs }) {

  const map = L.map(mapId).setView([45.55, -73.7], 11);
  map.on("click", () => {
    highlightedLayers.forEach(l => {
      l.options.pane = l.defaultPane;
      l.setStyle(l.defaultStyle);
    });
    highlightedLayers = [];
    updateStops();
    map.closePopup();
  });

  // ---- PANES (bottom -> top)
  map.createPane("pane_rapid_lines");
  map.getPane("pane_rapid_lines").style.zIndex = 200;
  
  map.createPane("pane_rapid_stops");
  map.getPane("pane_rapid_stops").style.zIndex = 250;
  
  map.createPane("pane_frequent_journee_lines");
  map.getPane("pane_frequent_journee_lines").style.zIndex = 300;

  map.createPane("pane_frequent_pointe_lines");
  map.getPane("pane_frequent_pointe_lines").style.zIndex = 350;
  
  map.createPane("pane_regulier_lines");
  map.getPane("pane_regulier_lines").style.zIndex = 400;
  
  map.createPane("pane_pointe_lines");
  map.getPane("pane_pointe_lines").style.zIndex = 450;
  
  map.createPane("pane_bus_stops");
  map.getPane("pane_bus_stops").style.zIndex = 500;
  
  map.createPane("pane_highlight");
  map.getPane("pane_highlight").style.zIndex = 900;

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

  function getPaneForRouteType(type) {
    if (type?.startsWith("lourd_")) return "pane_rapid_lines";
    if (type === "frequent_journee") return "pane_frequent_journee_lines";
    if (type === "frequent_pointe") return "pane_frequent_pointe_lines";
    if (type === "regulier") return "pane_regulier_lines";
    if (type === "pointe") return "pane_pointe_lines";
  
    return "pane_regulier_lines";
  }
  
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
        icons:
          feature.properties.icons ||
          (feature.properties.icon
            ? [feature.properties.icon]
            : []),
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

      const primaryService = visible[0];
      const primaryCfg = routeConfigs[primaryService.routeId];
      const primaryColor =
        ROUTE_TYPE_STYLES[primaryCfg.type]?.color || "#000";
      
      const isRapid = primaryCfg.type?.startsWith("lourd_");
      
      const marker = L.circleMarker(stop.coords, {
        pane: "pane_bus_stops",
        radius: isHighlighted ? 5 : 4,
      
        color: isHighlighted
          ? "#ff0000"
          : (isRapid ? primaryColor : "#000"),
      
        fillColor: isRapid ? primaryColor : "#fff",
        fillOpacity: 1,
        weight: isHighlighted ? 4 : 3
      });

      const stopName = formatStopName({
        stop_name: stop.name,
        icons: stop.icons
      });
      
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
          opacity: 1
        };

        const line = L.geoJSON(f, {
          style,
          pane: getPaneForRouteType(cfg.type)
        });
        
        line.eachLayer(l => {
          l.defaultPane = getPaneForRouteType(cfg.type);
        
          l._routeMeta = {
            routeId: routeId,
            direction: f.properties.direction
          };
        
          l.defaultStyle = {
            ...style,
            pane: l.defaultPane
          };
        
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
            opacity: 1,
            pane: "pane_highlight"
          });
          
          l.bringToFront();
        
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

    L.control.layers(null, routeLayers).addTo(map);

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
