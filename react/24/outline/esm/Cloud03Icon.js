import * as React from "react";
function Cloud03Icon({
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
    d: "M15.36 18.72H7.2a4.8 4.8 0 0 1-1.363-9.404 6.72 6.72 0 0 1 12.829 1.832 3.84 3.84 0 0 1-.906 7.572z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Cloud03Icon);
export default ForwardRef;