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

    const t = Math.max(0, Math.min(1,
      ((point[1] - A[1]) * dx + (point[0] - A[0]) * dy) /
      (dx * dx + dy * dy)
    ));

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

function generateStopTable({
  shapes,
  stopsLookup,
  direction,
  containerId,
  directionLabels = {}
}) {
  const displayName = directionLabels[direction] || direction;
  
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  const mainFeature = shapes.features.find(f =>
    f.properties.direction === direction &&
    f.properties.variant === "main"
  );

  if (!mainFeature) {
    container.innerHTML = `<p>No main variant found for direction: ${direction}</p>`;
    return;
  }

  if (!mainFeature) {
    container.innerHTML = "<p>No data</p>";
    return;
  }

  const line = flattenCoords(mainFeature.geometry.coordinates);
  const stopIds = mainFeature.properties.stops || [];

  let prevDist = null;

  const table = document.createElement("table");
  table.className = "dataframe";
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";

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

  const mainSet = new Set(stopIds);

  // --- MAIN BRANCH
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
    const delta = prevDist == null ? null : (cumulative - prevDist);

    prevDist = cumulative;

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${stop.properties.stop_name}</td>
      <td>${delta != null ? Math.round(delta) : "––"}</td>
      <td>${delta != null ? (cumulative / 1000).toFixed(2) : "––"}</td>
    `;

    table.querySelector("tbody").appendChild(tr);
  });

  // --- VARIANTS
  shapes.features.forEach(f => {
    if (f.properties.direction !== direction) return;
    if (f.properties.variant === "main") return;

    (f.properties.stops || []).forEach(id => {
      if (!mainSet.has(id)) {
        const stop =
          stopsLookup["new"][id] ||
          stopsLookup["current"][id];

        if (!stop) return;

        const tr = document.createElement("tr");

        tr.innerHTML = `
          <td>––</td>
          <td>${stop.properties.stop_name}</td>
          <td>––</td>
          <td>––</td>
        `;

        table.querySelector("tbody").appendChild(tr);
      }
    });
  });

  container.appendChild(table);
}

// expose globally
window.generateStopTable = generateStopTable;
