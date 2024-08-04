import * as React from "react";
function WebcamIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.632a3.9 3.9 0 0 1-2.828-1.234A4.33 4.33 0 0 1 8 12.421v-4.21c0-1.117.421-2.188 1.172-2.978A3.9 3.9 0 0 1 12 4c1.06 0 2.078.444 2.828 1.233S16 7.093 16 8.211v4.21a4.33 4.33 0 0 1-1.172 2.977A3.9 3.9 0 0 1 12 16.632m0 0V20m-1.6 0h3.2M12 9.053a.78.78 0 0 0 .566-.247.87.87 0 0 0 .234-.595.87.87 0 0 0-.234-.596.78.78 0 0 0-.566-.247.78.78 0 0 0-.566.247.87.87 0 0 0-.234.596c0 .223.084.437.234.595a.78.78 0 0 0 .566.247"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WebcamIcon);
export default ForwardRef;