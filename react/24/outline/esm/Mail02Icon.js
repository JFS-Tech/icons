import * as React from "react";
function Mail02Icon({
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
    d: "M3 9.994v7.848q0 0 0 0C3 19.034 4.007 20 5.25 20h13.5c1.243 0 2.25-.966 2.25-2.158V9.487M3 9.994c0-.372.2-.718.529-.915L12 4l8.427 4.547c.354.191.573.55.573.94M3 9.994c.45 0 9 5.337 9 5.337l9-5.844"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Mail02Icon);
export default ForwardRef;