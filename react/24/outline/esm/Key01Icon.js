import * as React from "react";
function Key01Icon({
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
    d: "M7.679 6.6h.12m6.82 2.782 6.688 6.689a1 1 0 0 1 .293.707V20.6a1 1 0 0 1-1 1h-2.491v-2.618h-2.618v-2.619l-3.225-3.036a6.11 6.11 0 1 1 2.352-4.818z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Key01Icon);
export default ForwardRef;