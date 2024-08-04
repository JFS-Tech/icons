import * as React from "react";
function ArrowDownRightIcon({
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
    d: "M19.8 15.086 14.486 20.4m0 0-5.314-5.314m5.314 5.314V7.6a4 4 0 0 0-4-4H4.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowDownRightIcon);
export default ForwardRef;