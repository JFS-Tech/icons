import * as React from "react";
function SkipForwardIcon({
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
    d: "M19 3.852v16.296M6.436 3.251l8.064 8.148a.856.856 0 0 1 0 1.202L6.436 20.75c-.53.536-1.436.157-1.436-.6V3.851c0-.758.906-1.137 1.436-.601"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SkipForwardIcon);
export default ForwardRef;