import * as React from "react";
function Stopwatch05Icon({
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
    d: "M12 9.84v3.377M9.5 2h5m6 11.429C20.5 18.162 16.694 22 12 22s-8.5-3.838-8.5-8.571c0-4.734 3.806-8.572 8.5-8.572s8.5 3.838 8.5 8.572Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Stopwatch05Icon);
export default ForwardRef;