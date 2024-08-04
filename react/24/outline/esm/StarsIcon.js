import * as React from "react";
function StarsIcon({
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
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "m14.823 2.4 1.83 4.946 4.947 1.83-4.946 1.83-1.83 4.947-1.83-4.946-4.947-1.83 4.946-1.83zM6.353 13.694l1.599 2.354 2.354 1.599-2.354 1.599-1.6 2.354-1.598-2.354L2.4 17.647l2.354-1.599z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(StarsIcon);
export default ForwardRef;