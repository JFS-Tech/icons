import * as React from "react";
function CurrencyCoinRupeeIcon({
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
    d: "M15.6 7.8H8.4h1.963c.695 0 1.36.289 1.852.803a2.8 2.8 0 0 1 .767 1.94 2.8 2.8 0 0 1-.767 1.94 2.56 2.56 0 0 1-1.851.803H8.4l3.927 4.114M8.4 10.543h7.2m6 1.457a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CurrencyCoinRupeeIcon);
export default ForwardRef;