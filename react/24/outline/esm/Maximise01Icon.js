import * as React from "react";
function Maximise01Icon({
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
    d: "M14.648 2.4h6.951m0 0v6.952m0-6.952-8.11 8.11M9.352 21.6H2.401m0 0v-6.952m0 6.952 8.11-8.11"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Maximise01Icon);
export default ForwardRef;