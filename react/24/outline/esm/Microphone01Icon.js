import * as React from "react";
function Microphone01Icon({
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
    d: "M4.398 11.177A7.68 7.68 0 0 0 12 17.753m0 0a7.68 7.68 0 0 0 7.602-6.576M12 17.753V21.6m.001-19.2A3.29 3.29 0 0 0 8.71 5.69v4.389a3.292 3.292 0 0 0 6.583 0V5.69A3.29 3.29 0 0 0 12 2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Microphone01Icon);
export default ForwardRef;