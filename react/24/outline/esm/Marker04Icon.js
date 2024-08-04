import * as React from "react";
function Marker04Icon({
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
    d: "M12 9.6v8m-3.6-3.71c-3.518.594-6 2.031-6 3.71 0 2.21 4.298 4 9.6 4s9.6-1.79 9.6-4c0-1.679-2.482-3.116-6-3.71m-.4-8.29a3.2 3.2 0 1 1-6.4 0 3.2 3.2 0 0 1 6.4 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Marker04Icon);
export default ForwardRef;