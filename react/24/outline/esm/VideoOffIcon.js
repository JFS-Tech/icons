import * as React from "react";
function VideoOffIcon({
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
    d: "m15.375 12.468 4.595-3.176c.577-.316.97-.13 1.01.554l.02 6.648c.013.63-.493.807-.975.506l-4.65-3.385zm0 0v-2.182c0-1.263-1.007-2.286-2.25-2.286H12M7.5 8H5.25C4.007 8 3 9.023 3 10.286V16c0 1.262 1.007 2.286 2.25 2.286h7.875c.472 0 .91-.148 1.272-.4M16.5 20 4.688 4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(VideoOffIcon);
export default ForwardRef;