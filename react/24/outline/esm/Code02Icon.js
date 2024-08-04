import * as React from "react";
function Code02Icon({
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
    d: "m10.8 17.7 2.4-11.4M6 15.9l-3.6-3.6L6 8.7m12 0 3.6 3.6-3.6 3.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Code02Icon);
export default ForwardRef;