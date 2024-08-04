import * as React from "react";
function Stopwatch04Icon({
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
    d: "m9.6 9.687 2.583 3.617H16.2M19.5 3.5l2.505 2.504M2.001 6.5l2.504-2.504M9.5 2h5m6 11.429C20.5 18.162 16.694 22 12 22s-8.5-3.838-8.5-8.571c0-4.734 3.806-8.572 8.5-8.572s8.5 3.838 8.5 8.572"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Stopwatch04Icon);
export default ForwardRef;