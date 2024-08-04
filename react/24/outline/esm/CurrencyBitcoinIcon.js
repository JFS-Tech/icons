import * as React from "react";
function CurrencyBitcoinIcon({
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
    d: "M6.5 6h8a3 3 0 0 1 0 6m0 0a3 3 0 0 1 0 6h-8m8-6h-6m0-6v12m1-15v3m4-3v3m-4 12v3m4-3v3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CurrencyBitcoinIcon);
export default ForwardRef;