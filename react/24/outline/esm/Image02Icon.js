import * as React from "react";
function Image02Icon({
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
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.8 21.6h14.4c1.325 0 2.4-1.13 2.4-2.526V4.926c0-1.395-1.075-2.526-2.4-2.526H4.8c-1.326 0-2.4 1.131-2.4 2.526v14.148c0 1.395 1.074 2.526 2.4 2.526"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 15.6h12l-4-7-3 4.5-2-2z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Image02Icon);
export default ForwardRef;