import * as React from "react";
function Server01Icon({
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
    d: "M16.8 12H7.2m9.6 0a4.8 4.8 0 0 0 0-9.6H7.2a4.8 4.8 0 0 0 0 9.6m9.6 0a4.8 4.8 0 0 1 0 9.6H7.2a4.8 4.8 0 1 1 0-9.6m10.2-4.8h-6m6 9.6h-6m-4.8.09v-.09m0-9.6v-.09"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Server01Icon);
export default ForwardRef;