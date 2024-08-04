import * as React from "react";
function MicrophoneOff01Icon({
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
    d: "M9.176 3.364a3.291 3.291 0 0 1 5.619 2.327V9M3.9 11.177a7.68 7.68 0 0 0 7.602 6.576m0 0a7.68 7.68 0 0 0 7.602-6.576m-7.602 6.576V21.6M8.212 7.8v2.28a3.292 3.292 0 0 0 4.875 2.886M3.3 2.4l17.4 17.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MicrophoneOff01Icon);
export default ForwardRef;