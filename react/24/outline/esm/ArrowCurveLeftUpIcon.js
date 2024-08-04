import * as React from "react";
function ArrowCurveLeftUpIcon({
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
    d: "M8.914 4.2 3.6 9.514m0 0 5.314 5.314M3.6 9.514h12.8a4 4 0 0 1 4 4V19.8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowCurveLeftUpIcon);
export default ForwardRef;