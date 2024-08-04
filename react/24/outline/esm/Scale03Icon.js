import * as React from "react";
function Scale03Icon({
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
    d: "M18 10.8V6m0 0h-4.477M18 6l-5.333 5.333M2.4 13.2h6a2.4 2.4 0 0 1 2.4 2.4v6m8.667-19.2H4.533A2.133 2.133 0 0 0 2.4 4.533v14.934c0 1.178.955 2.133 2.133 2.133h14.934a2.133 2.133 0 0 0 2.133-2.133V4.533A2.133 2.133 0 0 0 19.467 2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Scale03Icon);
export default ForwardRef;