import * as React from "react";
function HeadphonesIcon({
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
    d: "M3.6 15.6H6a1.2 1.2 0 0 1 1.2 1.2v2.4A1.2 1.2 0 0 1 6 20.4H3.6V12a8.4 8.4 0 0 1 16.8 0v8.4H18a1.2 1.2 0 0 1-1.2-1.2v-2.4a1.2 1.2 0 0 1 1.2-1.2h2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HeadphonesIcon);
export default ForwardRef;