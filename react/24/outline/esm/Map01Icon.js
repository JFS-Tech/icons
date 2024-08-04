import * as React from "react";
function Map01Icon({
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
    d: "M8.625 16.048v-6.024m6.188 3.833V7.833M3 17.714V4l5.478 2.286L14.74 4 21 6.286V20l-6.26-2.286L8.477 20z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Map01Icon);
export default ForwardRef;