import * as React from "react";
function File02Icon({
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
    d: "M8.4 7.2h7.2m-7.2 3.6h7.2m-7.2 3.6H12m-5.4-12h10.8a2.4 2.4 0 0 1 2.4 2.4v14.4a2.4 2.4 0 0 1-2.4 2.4H6.6a2.4 2.4 0 0 1-2.4-2.4V4.8a2.4 2.4 0 0 1 2.4-2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(File02Icon);
export default ForwardRef;