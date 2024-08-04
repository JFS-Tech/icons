import * as React from "react";
function Marker03Icon({
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
    strokeLinejoin: "round",
    d: "M14.4 9.608a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Marker03Icon);
export default ForwardRef;