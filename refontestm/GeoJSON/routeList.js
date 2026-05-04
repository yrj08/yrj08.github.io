// routeList.js

const ROUTE_TYPE_STYLES = {
  regulier: {
    bg: "#009EE0",
    text: "#fff",
    border: "#009EE0"
  },

  pointe: {
    bg: "#fff",
    text: "#009EE0",
    border: "#009EE0"
  },

  frequent_journee: {
    bg: "#781B7D",
    text: "#fff",
    border: "#781B7D"
  },

  frequent_pointe: {
    bg: "#fff",
    text: "#781B7D",
    border: "#781B7D"
  },

  saisonnier: {
    bg: "#FF9300",
    text: "#fff",
    border: "#FF9300"
  },

  nuit: {
    bg: "#000",
    text: "#fff",
    border: "#000"
  },

  tc_or: {
    bg: "#FFF3A3",
    text: "#000",
    border: "#D8C75A"
  },

  tc_reg: {
    bg: "#5DBDEA",
    text: "#fff",
    border: "#5DBDEA"
  },

  tc_pointe: {
    bg: "#fff",
    text: "#5DBDEA",
    border: "#5DBDEA"
  },

  aboli: {
    bg: "#fff",
    text: "#999",
    border: "#999"
  }
};

function createRouteRow(routeId, cfg) {
  const style =
    ROUTE_TYPE_STYLES[cfg.type] || ROUTE_TYPE_STYLES.regulier;

  const routeName =
    cfg.title.replace(/^Ligne\s+\S+\s+•\s*/, "");

  const directions =
    Object.values(cfg.directionLabels || {}).join(" • ");

  return `
    <div style="
      display:grid;
      grid-template-columns:70px 1fr 140px;
      gap:12px;
      align-items:center;
      margin-bottom:10px;
    ">
      <a
        href="route.html?route=${routeId}"
        style="text-decoration:none;"
      >
        <span style="
          display:inline-block;
          min-width:56px;
          text-align:center;
          padding:6px 10px;
          border-radius:8px;
          font-weight:bold;
          font-size:18px;
          background:${style.bg};
          color:${style.text};
          border:2px solid ${style.border};
        ">
          ${routeId}
        </span>
      </a>

      <div style="
        font-weight:bold;
        font-size:16px;
      ">
        ${routeName}
      </div>

      <div style="
        text-align:right;
        font-size:14px;
        color:#555;
        white-space:nowrap;
      ">
        ${directions}
      </div>
    </div>
  `;
}

function buildRouteLists() {
  const maintainedContainer =
    document.getElementById("routes-maintenues");

  const abolishedContainer =
    document.getElementById("routes-abolies");

  let maintainedHtml = "";
  let abolishedHtml = "";

  Object.entries(routeConfigs)
    .sort((a, b) =>
      a[0].localeCompare(b[0], undefined, { numeric: true })
    )
    .forEach(([routeId, cfg]) => {

      if (cfg.showInList === false) return;

      const row = createRouteRow(routeId, cfg);

      if (cfg.type === "aboli") {
        abolishedHtml += row;
      } else {
        maintainedHtml += row;
      }
    });

  maintainedContainer.innerHTML = maintainedHtml;
  abolishedContainer.innerHTML = abolishedHtml;
}

buildRouteLists();
