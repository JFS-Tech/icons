import * as React from "react";
function BankNote04Icon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.4 18.082V6.257a1 1 0 0 1 1.296-.956l.348.108c2.672.827 5.56.827 8.233 0a13.96 13.96 0 0 1 8.95.244l.373.139v12.782a.277.277 0 0 1-.373.26 13.96 13.96 0 0 0-8.95-.245c-2.673.827-5.561.827-8.233 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.4 11.99a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BankNote04Icon);
export default ForwardRef;