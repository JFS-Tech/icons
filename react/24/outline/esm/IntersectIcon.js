import * as React from "react";
function IntersectIcon({
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
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.2 19.2a2.4 2.4 0 0 1-2.4 2.4h-8a2.4 2.4 0 0 1-2.4-2.4v-8a2.4 2.4 0 0 1 2.4-2.4h8a2.4 2.4 0 0 1 2.4 2.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.6 12.8a2.4 2.4 0 0 1-2.4 2.4h-8a2.4 2.4 0 0 1-2.4-2.4v-8a2.4 2.4 0 0 1 2.4-2.4h8a2.4 2.4 0 0 1 2.4 2.4z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(IntersectIcon);
export default ForwardRef;