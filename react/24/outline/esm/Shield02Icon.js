import * as React from "react";
function Shield02Icon({
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
    strokeLinejoin: "round",
    d: "M13.342 3.07a3 3 0 0 0-2.684 0L4.8 6v8.028C4.8 16.2 7.362 18.67 12 21.6c4.638-2.929 7.2-4.8 7.2-7.572V6z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Shield02Icon);
export default ForwardRef;