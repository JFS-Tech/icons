import * as React from "react";
function IndentIncreaseIcon({
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
    d: "M21.6 4.8H8.4m13.2 4.8h-8.4m8.4 9.6H8.4m-6-12L7.2 12l-4.8 4.8m19.2-2.4h-8.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(IndentIncreaseIcon);
export default ForwardRef;