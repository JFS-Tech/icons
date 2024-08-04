import * as React from "react";
function ArrowCurveLeftRightIcon({
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
    d: "m15.086 19.8 5.314-5.314m0 0-5.314-5.314m5.314 5.314H7.6a4 4 0 0 1-4-4V4.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowCurveLeftRightIcon);
export default ForwardRef;