import * as React from "react";
function SmileyWinkIcon({
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
    d: "M8.672 14.8c.7 1.13 1.929 1.88 3.328 1.88s2.628-.75 3.328-1.88M9.798 9H7.8m13.8 3a9.6 9.6 0 0 1-9.6 9.6 9.6 9.6 0 1 1 9.6-9.6m-6.72-3h.085v.077h-.085z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SmileyWinkIcon);
export default ForwardRef;