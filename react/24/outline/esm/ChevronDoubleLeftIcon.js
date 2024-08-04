import * as React from "react";
function ChevronDoubleLeftIcon({
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
    d: "m13.4 5.8 5.6 5.6-5.6 5.6M5 5.8l5.6 5.6L5 17"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChevronDoubleLeftIcon);
export default ForwardRef;