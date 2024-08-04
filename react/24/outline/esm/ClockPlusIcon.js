import * as React from "react";
function ClockPlusIcon({
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
    d: "m14.625 14.25-3.375-1.125V8.421m9 3.579a9 9 0 1 0-7.312 8.842m5.624-5.467v2.813m0 0V21m0-2.812h2.813m-2.812 0H15.75"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ClockPlusIcon);
export default ForwardRef;