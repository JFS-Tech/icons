import * as React from "react";
function Bold01Icon({
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
    d: "M6 12v8h8.1c2.154 0 3.9-1.79 3.9-4s-1.746-4-3.9-4zm0 0h6.9c2.154 0 3.9-1.79 3.9-4s-1.746-4-3.9-4H6z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Bold01Icon);
export default ForwardRef;