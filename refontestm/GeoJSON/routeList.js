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

  const directions = Object.values(cfg.directionLabels || {});
  const dir1 = directions[0] || "";
  const dir2 = directions[1] || "";

  return `
    <div style="
      display:grid;
      grid-template-columns: 60px 220px 270px 270px;
      gap:10px;
      align-items:center;
      margin-bottom:5px;
      font-size:15px;
    ">
      <a
        href="route.html?route=${routeId}"
        style="text-decoration:none;"
      >
        <span style="
          display:inline-block;
          min-width:40px;
          text-align:center;
          padding:2px 4px;
          border-radius:7px;
          font-weight:bold;
          font-size:16px;
          background:${style.bg};
          color:${style.text};
          border:2px solid ${style.border};
        ">
          ${routeId}
        </span>
      </a>

      <div style="
        font-weight:600;
        white-space:nowrap;
      ">
        ${routeName}
      </div>

      <div style="
        text-align:left;
        color:#444;
        white-space:nowrap;
      ">
        ${dir1}
      </div>

      <div style="
        text-align:left;
        color:#444;
        white-space:nowrap;
      ">
        ${dir2}
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
