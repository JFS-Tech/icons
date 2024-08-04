import * as React from "react";
function StopwatchOffIcon({
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
    d: "m2.4 3.687 18.6 18.6M18.26 6.852l2.088-2.087m0 0-1.252-1.252m1.252 1.252L21.6 6.017M9.5 2h5M5.422 8A8.58 8.58 0 0 0 3.5 13.429C3.5 18.162 7.305 22 12 22a8.42 8.42 0 0 0 5.5-2.036m2.5-3.632c.323-.907.5-1.884.5-2.903 0-4.734-3.806-8.572-8.5-8.572a8.4 8.4 0 0 0-3 .55"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(StopwatchOffIcon);
export default ForwardRef;