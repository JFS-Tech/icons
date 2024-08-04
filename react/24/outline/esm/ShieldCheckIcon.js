import * as React from "react";
function ShieldCheckIcon({
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
    d: "m9.6 11.188 1.8 1.8 3.6-3.6m-10.2-3.6 5.59-2.795a3.6 3.6 0 0 1 3.22 0l5.59 2.795v8.028c0 2.772-2.562 4.643-7.2 7.572-4.638-2.93-7.2-5.4-7.2-7.572z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ShieldCheckIcon);
export default ForwardRef;