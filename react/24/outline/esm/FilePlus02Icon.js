import * as React from "react";
function FilePlus02Icon({
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
    d: "M10.406 21.6h-4.8a2.4 2.4 0 0 1-2.4-2.4V4.8a2.4 2.4 0 0 1 2.4-2.4h10.8a2.4 2.4 0 0 1 2.4 2.4v6.6M17.4 21.188v-3.394m0 0V14.4m0 3.394h-3.394m3.394 0h3.394M7.406 7.2h7.2m-7.2 3.6h7.2m-7.2 3.6h3.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FilePlus02Icon);
export default ForwardRef;