import * as React from "react";
function Eraser01Icon({
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
    d: "M19.678 21.341H7.248l-4.52-4.52a1.13 1.13 0 0 1 0-1.593l11.3-11.3a1.13 1.13 0 0 1 1.594 0l5.65 5.65a1.13 1.13 0 0 1 0 1.594L17.4 15.043m-6.298 6.298 6.298-6.298M9.912 8.045l7.488 6.998"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Eraser01Icon);
export default ForwardRef;