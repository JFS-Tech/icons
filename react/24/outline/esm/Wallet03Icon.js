import * as React from "react";
function Wallet03Icon({
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
    d: "m2.398 7.54.004 12.36a2.56 2.56 0 0 0 2.56 2.56h14.08a2.56 2.56 0 0 0 2.56-2.56V9.66a2.133 2.133 0 0 0-2.133-2.133H2.417a.02.02 0 0 0-.02.013m0 0c0-.24 14.404-6 14.404-6v5.4m-.303 7.823-.017.017"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Wallet03Icon);
export default ForwardRef;