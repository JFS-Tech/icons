import * as React from "react";
function Cloud01Icon({
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
    strokeLinejoin: "round",
    d: "M14.743 18.857a6.857 6.857 0 1 0 0-13.714 6.86 6.86 0 0 0-6.351 4.263 4.8 4.8 0 1 0-1.192 9.45z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Cloud01Icon);
export default ForwardRef;