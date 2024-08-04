import * as React from "react";
function Pointer02Icon({
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
    d: "m12.296 18.145 6.148 2.989c1.152.56 2.382-.612 1.877-1.79L13.526 3.488c-.473-1.104-2.03-1.123-2.53-.032L3.693 19.387c-.533 1.164.665 2.366 1.83 1.836z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Pointer02Icon);
export default ForwardRef;