// stopTable.js

function haversine(a, b) {
  const R = 6371000;
  const toRad = x => x * Math.PI / 180;

  const dLat = toRad(b[0] - a[0]);
  const dLon = toRad(b[1] - a[1]);

  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(dLon / 2) ** 2;

  return 2 * R * Math.asin(Math.sqrt(h));
}


function flattenCoords(coords) {
  const result = [];

  function recurse(c) {
    if (typeof c[0] === "number") {
      result.push([c[1], c[0]]);
    } else {
      c.forEach(recurse);
    }
  }

  recurse(coords);
  return result;
}


function projectPointOnLine(point, line) {
  let minDist = Infinity;
  let cumulative = 0;
  let bestCumulative = 0;

  for (let i = 0; i < line.length - 1; i++) {
    const A = line[i];
    const B = line[i + 1];

    const dx = B[1] - A[1];
    const dy = B[0] - A[0];

    const denominator = dx * dx + dy * dy;

    if (denominator === 0) continue;

    const t = Math.max(
      0,
      Math.min(
        1,
        ((point[1] - A[1]) * dx + (point[0] - A[0]) * dy) /
        denominator
      )
    );

    const proj = [
      A[0] + t * dy,
      A[1] + t * dx
    ];

    const dist = haversine(point, proj);

    if (dist < minDist) {
      minDist = dist;
      bestCumulative = cumulative + haversine(A, proj);
    }

    cumulative += haversine(A, B);
  }

  return bestCumulative;
}


/*
 * Variants that should never appear in the stop selector/table.
 */
const EXCLUDED_VARIANTS = [
  "cancelled",
  "temporary",
  "short"
];


function getUsableBranches(shapes, direction) {

  const features = shapes.features.filter(f =>
    f.properties.direction === direction &&
    !EXCLUDED_VARIANTS.includes(f.properties.variant)
  );

  /*
   * Group by branch.
   *
   * This means you can have several features belonging
   * to the same branch without creating duplicate choices.
   */
  const branches = {};

  features.forEach((f, index) => {

    const branchId =
      f.properties.branch ||
      `branch-${index}`;

    if (!branches[branchId]) {
      branches[branchId] = {
        branch: branchId,
        features: [],
        headsign: f.properties.headsign || ""
      };
    }

    branches[branchId].features.push(f);
  });

  return Object.values(branches);
}


/*
 * Returns all stops for a branch while avoiding duplicates.
 */
function getBranchStops(branch) {

  const ids = [];

  branch.features.forEach(f => {
    (f.properties.stops || []).forEach(id => {
      if (!ids.includes(id)) {
        ids.push(id);
      }
    });
  });

  return ids;
}


/*
 * Creates the actual stop table for a selected branch.
 */
function buildBranchTable({
  branch,
  stopsLookup,
  container
}) {

  container.innerHTML = "";

  /*
   * For the purposes of distance calculation, use the first
   * feature belonging to this branch.
   *
   * Normally each branch has one shape feature.
   */
  const feature = branch.features[0];

  if (!feature) return;

  const line = flattenCoords(feature.geometry.coordinates);
  const stopIds = getBranchStops(branch);

  let prevDist = null;

  const table = document.createElement("table");
  table.className = "dataframe";

  table.innerHTML = `
    <thead>
      <tr>
        <th>Séq</th>
        <th>Arrêt / Intersection</th>
        <th>Dist<br>(m)</th>
        <th>Cumul<br>(km)</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  stopIds.forEach((id, idx) => {

    const stop =
      stopsLookup["new"][id] ||
      stopsLookup["current"][id];

    if (!stop) return;

    const coords = [
      stop.geometry.coordinates[1],
      stop.geometry.coordinates[0]
    ];

    const cumulative = projectPointOnLine(coords, line);

    const delta =
      prevDist == null
        ? null
        : cumulative - prevDist;

    prevDist = cumulative;

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${formatStopName(stop.properties)}</td>
      <td>${delta != null ? Math.round(delta) : "––"}</td>
      <td>${delta != null ? (cumulative / 1000).toFixed(2) : "––"}</td>
    `;

    tbody.appendChild(tr);
  });

  container.appendChild(table);
}


/*
 * The "Toutes les branches" version.
 *
 * Main branch first, with distances.
 * Additional stops from other branches are added afterward.
 */
function buildAllBranchesTable({
  branches,
  stopsLookup,
  container
}) {

  container.innerHTML = "";

  if (!branches.length) {
    container.innerHTML = "<p>Aucun arrêt disponible.</p>";
    return;
  }

  /*
   * Find main branch.
   */
  const mainBranch =
    branches.find(b =>
      b.features.some(f => f.properties.variant === "main")
    ) || branches[0];

  const mainStopIds = getBranchStops(mainBranch);

  /*
   * Keep track of stops already displayed.
   */
  const displayedStops = new Set(mainStopIds);

  /*
   * Build main table using the same distance logic.
   */
  const feature = mainBranch.features[0];

  if (!feature) return;

  const line = flattenCoords(feature.geometry.coordinates);

  let prevDist = null;

  const table = document.createElement("table");
  table.className = "dataframe";

  table.innerHTML = `
    <thead>
      <tr>
        <th>Séq</th>
        <th>Arrêt / Intersection</th>
        <th>Dist<br>(m)</th>
        <th>Cumul<br>(km)</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  /*
   * MAIN BRANCH
   */
  mainStopIds.forEach((id, idx) => {

    const stop =
      stopsLookup["new"][id] ||
      stopsLookup["current"][id];

    if (!stop) return;

    const coords = [
      stop.geometry.coordinates[1],
      stop.geometry.coordinates[0]
    ];

    const cumulative = projectPointOnLine(coords, line);

    const delta =
      prevDist == null
        ? null
        : cumulative - prevDist;

    prevDist = cumulative;

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${formatStopName(stop.properties)}</td>
      <td>${delta != null ? Math.round(delta) : "––"}</td>
      <td>${delta != null ? (cumulative / 1000).toFixed(2) : "––"}</td>
    `;

    tbody.appendChild(tr);
  });


  /*
   * OTHER BRANCHES
   *
   * Only add stops that haven't already appeared on main.
   */
  branches.forEach(branch => {

    if (branch === mainBranch) return;

    getBranchStops(branch).forEach(id => {

      if (displayedStops.has(id)) return;

      const stop =
        stopsLookup["new"][id] ||
        stopsLookup["current"][id];

      if (!stop) return;

      displayedStops.add(id);

      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>––</td>
        <td>${formatStopName(stop.properties)}</td>
        <td>––</td>
        <td>––</td>
      `;

      tbody.appendChild(tr);
    });
  });

  container.appendChild(table);
}


/*
 * Creates the branch radio-button selector.
 */
function buildBranchSelector({
  branches,
  stopsLookup,
  container,
  direction
}) {

  container.innerHTML = "";

  /*
   * Selector container
   */
  const selector = document.createElement("div");

  selector.style.margin = "0 0 10px 0";
  selector.style.fontSize = "15px";
  selector.style.lineHeight = "1.7";

  const heading = document.createElement("div");

  heading.innerHTML = "<strong>Trajet :</strong>";
  heading.style.marginBottom = "2px";

  selector.appendChild(heading);


  /*
   * Separate container for the table.
   *
   * This is important because the table-building functions
   * clear their container before rebuilding the table.
   */
  const tableContainer = document.createElement("div");


  /*
   * Radio button helper.
   */
  function addOption(value, label, checked, callback) {

    const wrapper = document.createElement("label");

    wrapper.style.display = "block";
    wrapper.style.cursor = "pointer";

    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = `branch-${direction}`;
    radio.value = value;
    radio.checked = checked;

    radio.style.marginRight = "5px";

    radio.addEventListener("change", callback);

    wrapper.appendChild(radio);
    wrapper.appendChild(document.createTextNode(label));

    selector.appendChild(wrapper);
  }


  /*
   * ALL BRANCHES
   */
  addOption(
    "all",
    "Tous les trajets",
    true,
    () => {
      buildAllBranchesTable({
        branches,
        stopsLookup,
        container: tableContainer
      });
    }
  );


  /*
   * INDIVIDUAL BRANCHES
   */
  branches.forEach(branch => {

    let label = branch.headsign || branch.branch;

    const headsignFeature =
      branch.features.find(f => f.properties.headsign);

    if (headsignFeature) {
      label = headsignFeature.properties.headsign;
    }

    addOption(
      branch.branch,
      label,
      false,
      () => {
        buildBranchTable({
          branch,
          stopsLookup,
          container: tableContainer
        });
      }
    );
  });


  /*
   * Add selector first, then table.
   */
  container.appendChild(selector);
  container.appendChild(tableContainer);


  /*
   * Initially display "all branches".
   */
  buildAllBranchesTable({
    branches,
    stopsLookup,
    container: tableContainer
  });
}


/*
 * Main entry point.
 */
function generateStopTable({
  shapes,
  stopsLookup,
  direction,
  containerId,
  directionLabels = {}
}) {

  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = "";

  const displayName =
    directionLabels[direction] || direction;


  /*
   * Find usable branches for this direction.
   */
  const branches =
    getUsableBranches(shapes, direction);


  if (!branches.length) {

    container.innerHTML =
      `<p>Aucun arrêt disponible pour ${displayName}.</p>`;

    return;
  }


  /*
   * Create the selector + initial table.
   */
  buildBranchSelector({
    branches,
    stopsLookup,
    container,
    direction
  });
}


// expose globally
window.generateStopTable = generateStopTable;
