import * as React from "react";
function BankNote03Icon({
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
    d: "M6.023 11.976 6 12m12-.024-.024.024M4.2 18h15.6a1.8 1.8 0 0 0 1.8-1.8V7.8A1.8 1.8 0 0 0 19.8 6H4.2a1.8 1.8 0 0 0-1.8 1.8v8.4A1.8 1.8 0 0 0 4.2 18m10.2-6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BankNote03Icon);
export default ForwardRef;