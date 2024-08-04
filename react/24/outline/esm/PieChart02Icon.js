import * as React from "react";
function PieChart02Icon({
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
    d: "M11.435 21.883a9.035 9.035 0 0 0 9.036-9.036h-9.036V3.812a9.035 9.035 0 0 0 0 18.07"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.388 2.118v6.69H21.6v-.479a6.21 6.21 0 0 0-6.212-6.211"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PieChart02Icon);
export default ForwardRef;