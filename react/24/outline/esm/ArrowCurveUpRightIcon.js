import * as React from "react";
function ArrowCurveUpRightIcon({
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
    d: "M19.8 8.914 14.486 3.6m0 0L9.172 8.914M14.486 3.6v12.8a4 4 0 0 1-4 4H4.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowCurveUpRightIcon);
export default ForwardRef;