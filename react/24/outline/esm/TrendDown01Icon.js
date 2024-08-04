import * as React from "react";
function TrendDown01Icon({
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
    d: "m2.4 7.2 5.376 5.17 4.608-4.431L21.6 16.8m0 0h-6.912m6.912 0v-6.646"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TrendDown01Icon);
export default ForwardRef;