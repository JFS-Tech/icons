import * as React from "react";
function ClockForwardIcon({
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
    d: "m14.625 14.25-3.375-1.125V8.421m9 3.579a9 9 0 1 0-1.204 4.5m-1.265-5.488 2.25 2.25 2.25-2.25"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ClockForwardIcon);
export default ForwardRef;