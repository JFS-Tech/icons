import * as React from "react";
function LetterSpacing03Icon({
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
    d: "M2.4 7.054 5.854 3.6m0 0 3.454 3.454M5.854 3.6V19.72M2.4 16.265l3.454 3.454m0 0 3.454-3.454m4.978 1.151h3.047m0 0h3.048m-3.048 0V7.054m0 0h-4.571v1.829m4.571-1.829H21.6v2.133"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LetterSpacing03Icon);
export default ForwardRef;