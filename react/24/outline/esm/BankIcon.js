import * as React from "react";
function BankIcon({
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
    d: "M4 15V12.33M9.333 15V12.33M14.667 15V12.33M20 15V12.33M2.4 18.4h19.2v3.2H2.4zm0-9.6V6.667L11.605 2.4 21.6 6.667V8.8z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BankIcon);
export default ForwardRef;