import * as React from "react";
function ContrastIcon({
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
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.4 12a9.6 9.6 0 1 1 19.2 0 9.6 9.6 0 0 1-19.2 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 12.5v-1A5.5 5.5 0 0 0 12.5 6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5 5.5 5.5 0 0 0 5.5-5.5Z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ContrastIcon);
export default ForwardRef;