import * as React from "react";
function ClockCheckIcon({
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
    d: "M14.875 14.25 11.5 13.125V8.421m9 3.579a9 9 0 1 0-7.312 8.842m2.25-2.654 1.687 1.687 4.5-4.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ClockCheckIcon);
export default ForwardRef;