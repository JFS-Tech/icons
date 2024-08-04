import * as React from "react";
function Password02Icon({
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
    d: "M6.529 9.302h.14m5.33 0h.14m5.19 0h.14m-6.07 5.4H4.534A2.133 2.133 0 0 1 2.4 12.57V6.036c0-1.179.955-2.134 2.133-2.134h14.934c1.178 0 2.133.955 2.133 2.134v3.266m-6.189 4.295 1.39-.695a3.6 3.6 0 0 1 3.22 0l1.39.695v3.345c0 1.155-1.068 1.935-3 3.155-1.932-1.22-3-2.25-3-3.155z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Password02Icon);
export default ForwardRef;