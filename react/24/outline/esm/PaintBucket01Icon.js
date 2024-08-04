import * as React from "react";
function PaintBucket01Icon({
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
    d: "m10.95 2.4.513.513M3.6 13.039h16.996M11.463 2.913l.744.744s-7.755 7.61-7.913 7.768a2.37 2.37 0 0 0 0 3.352l6.129 6.129a2.37 2.37 0 0 0 3.352 0l6.129-6.129a2.37 2.37 0 0 0 .115-3.228.9.9 0 0 0-.181-.26z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PaintBucket01Icon);
export default ForwardRef;