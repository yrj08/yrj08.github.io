// displayHelpers.js

function formatStopName(stopProps, imagePath = "../GeoJSON/images/") {
  const stopName = stopProps.stop_name || "";

  const icons =
    stopProps.icons ||
    (stopProps.icon ? [stopProps.icon] : []);

  const iconsHtml = icons.map(icon => `
    <img
      src="${imagePath}${icon}"
      style="
        height:16px;
        width:auto;
        vertical-align:middle;
        margin-right:4px;
        border-radius:3px;
      "
      alt=""
    >
  `).join("");

  return `${iconsHtml}${stopName}`;
}

window.formatStopName = formatStopName;
