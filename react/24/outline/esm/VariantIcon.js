import * as React from "react";
function VariantIcon({
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
    d: "M11.384 4.255a.87.87 0 0 1 1.232 0l7.129 7.13a.87.87 0 0 1 0 1.23l-7.13 7.13a.87.87 0 0 1-1.23 0l-7.13-7.13a.87.87 0 0 1 0-1.23z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(VariantIcon);
export default ForwardRef;