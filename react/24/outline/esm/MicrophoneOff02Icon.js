import * as React from "react";
function MicrophoneOff02Icon({
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
    d: "M7.792 6.516v5.488a4.116 4.116 0 0 0 7.591 2.206M2.4 13.376a9.607 9.607 0 0 0 19.014 0M16.024 9V6.516A4.116 4.116 0 0 0 9.769 3M4.2 2.4l17.4 17.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MicrophoneOff02Icon);
export default ForwardRef;