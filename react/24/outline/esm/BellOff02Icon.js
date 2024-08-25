import * as React from "react";
function BellOff02Icon({
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
    d: "M20 16.714c-.571-.854-1.126-2.113-1.126-3.632l.024-2.077c0-4.12-3.066-7.46-6.848-7.46q-.611.001-1.192.115m4.949 14.067H4.51c-.424 0-.661-.662-.405-1.03.596-.854 1.17-2.106 1.17-3.615l.025-2.185c0-1.752.563-3.361 1.502-4.624M9.367 21h5.366m3.22-.546L5.61 3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BellOff02Icon);
export default ForwardRef;