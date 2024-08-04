import * as React from "react";
function SpaceWidthIcon({
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
    d: "M21.6 2.4v19.2M2.4 2.4v19.2m13.17-12L18 12m0 0-2.43 2.4M18 12H6m2.43 2.4L6 12m0 0 2.43-2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SpaceWidthIcon);
export default ForwardRef;