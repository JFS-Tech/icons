import * as React from "react";
function Pause02Icon({
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
    d: "M9.6 15.6V8.4m4.8 7.2V8.4M12 21.6a9.6 9.6 0 1 1 0-19.2 9.6 9.6 0 0 1 0 19.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Pause02Icon);
export default ForwardRef;