import * as React from "react";
function GroupIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    fill: "#1751D0"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m7.925 0 3.52 3.52-3.52 3.52-3.52-3.52zM12.325 4.4l3.52 3.52-3.52 3.52-3.52-3.52zM3.525 4.4l3.52 3.52-3.52 3.52-3.52-3.52zM7.925 8.8l3.52 3.52-3.52 3.52-3.52-3.52z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GroupIcon);
export default ForwardRef;