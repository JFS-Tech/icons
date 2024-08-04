import * as React from "react";
function Clock01Icon({
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
    fill: "#000",
    d: "M15.559 15.199a1 1 0 0 0 .632-1.898zM12.5 13.125h-1a1 1 0 0 0 .684.949zm1-4.704a1 1 0 1 0-2 0zm2.691 4.88-3.375-1.125-.632 1.898 3.375 1.125zm-2.691-.176V8.421h-2v4.704zm7-1.125a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8h-2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2c-5.523 0-10 4.477-10 10zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Clock01Icon);
export default ForwardRef;