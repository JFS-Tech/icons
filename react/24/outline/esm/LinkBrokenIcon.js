import * as React from "react";
function LinkBrokenIcon({
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
    d: "m7.471 10.283-2.233 2.234a4.45 4.45 0 0 0 .047 6.343 4.45 4.45 0 0 0 3.18 1.352c1.22.009 2.329-.444 3.163-1.278L13.86 16.7m2.853-2.798 2.234-2.233a4.45 4.45 0 0 0-.047-6.343A4.54 4.54 0 0 0 15.72 4a4.4 4.4 0 0 0-3.162 1.278l-2.234 2.233M8.706 15.42l6.7-6.7M5.336 5.216 4.23 4.111m4.948-.843.18-1.823M1.723 9.08l1.89-.187m15.329 9.612 1.106 1.106m-4.947.843-.181 1.823m7.636-7.637-1.89.188"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LinkBrokenIcon);
export default ForwardRef;