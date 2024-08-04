import * as React from "react";
function Calculator02Icon({
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
    d: "m6.375 17.625 11.25-11.25M8.25 10.75v-2.5m0 0v-2.5m0 2.5h-2.5m2.5 0h2.5m2.5 8.125h5M4.703 22h14.594A2.703 2.703 0 0 0 22 19.297V4.703A2.703 2.703 0 0 0 19.297 2H4.703A2.703 2.703 0 0 0 2 4.703v14.594A2.703 2.703 0 0 0 4.703 22"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Calculator02Icon);
export default ForwardRef;