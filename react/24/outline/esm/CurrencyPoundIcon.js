import * as React from "react";
function CurrencyPoundIcon({
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
    d: "M17.05 18.465a6 6 0 0 1-5 0 6 6 0 0 0-5 .5 3 3 0 0 0 2-2.5v-7.5a4 4 0 0 1 7.45-2m-2.55 6h-7"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CurrencyPoundIcon);
export default ForwardRef;