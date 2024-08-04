import * as React from "react";
function ListNumbersIcon({
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
    d: "M10.6 6h10.8m-10.8 6.5h10.8M10.8 19h10.6M2.5 16a2 2 0 0 1 4 0c0 .591-.5 1-1 1.5l-3 2.5h4m-2-10V4l-2 2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ListNumbersIcon);
export default ForwardRef;