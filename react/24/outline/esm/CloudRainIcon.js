import * as React from "react";
function CloudRainIcon({
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
    d: "m12 15.6-1.8 3m4.8 0-1.8 3M21 8.4a6 6 0 0 1-6 6H7.8a4.8 4.8 0 1 1 2.079-9.128A6 6 0 0 1 21 8.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CloudRainIcon);
export default ForwardRef;