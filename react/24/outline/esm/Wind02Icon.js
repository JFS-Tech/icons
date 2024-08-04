import * as React from "react";
function Wind02Icon({
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
    d: "m2.4 17.94 2.389-.832a7.6 7.6 0 0 1 6.364.63 7.6 7.6 0 0 0 6.459.596l3.988-1.45M2.4 12.202l2.389-.833a7.6 7.6 0 0 1 6.364.63 7.6 7.6 0 0 0 6.459.596l3.988-1.45M2.4 6.465l2.389-.834a7.6 7.6 0 0 1 6.364.63 7.6 7.6 0 0 0 6.459.596l3.988-1.45"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Wind02Icon);
export default ForwardRef;