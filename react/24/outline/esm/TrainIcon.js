import * as React from "react";
function TrainIcon({
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
    d: "m6 20.4-1.8 2.4m16.119-.02-1.853-2.36M8.401 16.872V16.8m7.2.072V16.8m-10.8-3h15m-7.8-9v8.4m-3-12h6M6.564 20.4h10.87a2.965 2.965 0 0 0 2.965-2.965v-9.67A2.965 2.965 0 0 0 17.435 4.8H6.565A2.965 2.965 0 0 0 3.6 7.765v9.67A2.965 2.965 0 0 0 6.565 20.4Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TrainIcon);
export default ForwardRef;