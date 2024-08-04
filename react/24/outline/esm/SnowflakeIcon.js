import * as React from "react";
function SnowflakeIcon({
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
    d: "M8.811 21.245 12 18.057m0 0 3.188 3.188m-3.188-3.188V5.943m3.188-3.188-3.188 3.188m0 0L8.811 2.755M2.4 13.862l4.355 1.166m0 0-1.167 4.355m1.167-4.354 10.49-6.057m4.355 1.166-4.355-1.166m0 0 1.167-4.355m-12.824 0 1.167 4.355m0 0L2.4 10.138m4.355-1.166 10.49 6.057m1.167 4.354-1.167-4.354m0 0 4.355-1.167"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SnowflakeIcon);
export default ForwardRef;