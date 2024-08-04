import * as React from "react";
function ColorSwatch01Icon({
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
    d: "M6 9.874a6 6 0 1 0 7.8 5.725M18 9.875A6 6 0 1 1 12.6 20.4m5.4-12a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ColorSwatch01Icon);
export default ForwardRef;