import * as React from "react";
function IndentDecreaseIcon({
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
    d: "M21.6 4.8h-8.4m8.4 4.8H10.8m10.8 9.6h-8.4m-6-12L2.4 12l4.8 4.8m14.4-2.4H10.8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(IndentDecreaseIcon);
export default ForwardRef;