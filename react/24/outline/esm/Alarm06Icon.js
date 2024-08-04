import * as React from "react";
function Alarm06Icon({
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
    d: "M5.856 18.912 3.168 21.6m17.664 0-2.688-2.688L3.3 3.9 1.8 5.4m20.4 0-3-3M9.6 4.666A8.448 8.448 0 0 1 20.15 15m-2.75 4.265A8.448 8.448 0 0 1 5.646 7.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Alarm06Icon);
export default ForwardRef;