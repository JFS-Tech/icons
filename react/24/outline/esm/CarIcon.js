import * as React from "react";
function CarIcon({
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
    d: "M4 14.5v-2.33c0-1.13.895-2.048 2-2.048M4 14.5c0 1.132.895 2.049 2 2.049h12c1.105 0 2-.917 2-2.049m-16 0v3.134C4 18.39 4.597 19 5.333 19h1.334C7.403 19 8 18.389 8 17.634V16.55M20 14.5v-2.33c0-1.13-.895-2.048-2-2.048H6M20 14.5v3.134C20 18.39 19.403 19 18.667 19h-1.334C16.597 19 16 18.389 16 17.634V16.55M6 10.122l1.07-4.108A1.34 1.34 0 0 1 8.357 5h7.348c.574 0 1.083.376 1.265.934l1.362 4.188m-12 3.073h2.334m6.666 0h2.334"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CarIcon);
export default ForwardRef;