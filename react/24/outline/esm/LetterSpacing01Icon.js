import * as React from "react";
function LetterSpacing01Icon({
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
    d: "M5.763 20.754 2.4 17.391m0 0 3.363-3.363M2.4 17.39h19.2m-3.363 3.363 3.363-3.363m0 0-3.363-3.363m-5.979-1.539V2.4m0 0h-4.45m4.45 0h4.155"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LetterSpacing01Icon);
export default ForwardRef;