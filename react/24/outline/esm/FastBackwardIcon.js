import * as React from "react";
function FastBackwardIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "m13.919 12.48 6.52 6.52a.68.68 0 0 0 1.16-.48V5.48a.68.68 0 0 0-1.16-.481l-6.52 6.52a.68.68 0 0 0 0 .962M2.6 12.48 9.12 19a.68.68 0 0 0 1.16-.48V5.48a.68.68 0 0 0-1.16-.481l-6.52 6.52a.68.68 0 0 0 0 .962"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FastBackwardIcon);
export default ForwardRef;