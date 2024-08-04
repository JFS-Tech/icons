import * as React from "react";
function CurrencyCoinCentIcon({
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
    d: "M15 8.689a4.53 4.53 0 0 0-3.044-1.17m0 0a4.554 4.554 0 0 0-4.552 4.558 4.554 4.554 0 0 0 4.552 4.557m0-9.115V6m0 10.635a4.53 4.53 0 0 0 3.041-1.166m-3.041 1.166v1.52M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CurrencyCoinCentIcon);
export default ForwardRef;