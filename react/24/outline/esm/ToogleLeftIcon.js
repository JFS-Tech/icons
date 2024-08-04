import * as React from "react";
function ToogleLeftIcon({
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
    d: "M7.75 7.75h8.5a4.25 4.25 0 0 1 0 8.5h-8.5m0-8.5a4.25 4.25 0 0 0 0 8.5m0-8.5a4.25 4.25 0 0 1 0 8.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ToogleLeftIcon);
export default ForwardRef;