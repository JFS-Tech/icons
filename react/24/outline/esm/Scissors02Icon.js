import * as React from "react";
function Scissors02Icon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.6 9.395 20.4 16.8m0-9.6L3.6 14.605M17.4 12l-.023.024M22.224 12l-.024.024M4.8 9.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2m0 12a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M24 0v24H0V0z"
  }))));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Scissors02Icon);
export default ForwardRef;