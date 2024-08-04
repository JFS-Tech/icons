import * as React from "react";
function Ticket01Icon({
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
    d: "M14.4 15.14v-.194m0-2.809v-.194m0-2.796v-.194M5.012 3.46H12a2.625 2.625 0 0 0 5.248 0h1.74a3.81 3.81 0 0 1 3.81 3.811v9.457a3.81 3.81 0 0 1-3.81 3.812h-1.74a2.625 2.625 0 0 0-5.248 0h-6.99A3.81 3.81 0 0 1 1.2 16.728V7.271A3.81 3.81 0 0 1 5.012 3.46"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Ticket01Icon);
export default ForwardRef;