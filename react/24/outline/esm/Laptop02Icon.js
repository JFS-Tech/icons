import * as React from "react";
function Laptop02Icon({
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
    fill: "#000",
    d: "M19.4 15.6a1 1 0 1 0 2 0zm-16.8 0a1 1 0 1 0 2 0zM5.7 5.2h12.6v-2H5.7zm13.7 1.031v9.37h2V6.23zm-14.8 9.37V6.23h-2v9.37zM18.3 5.2c.64 0 1.1.492 1.1 1.03h2c0-1.705-1.42-3.03-3.1-3.03zm-12.6-2c-1.68 0-3.1 1.325-3.1 3.03h2c0-.538.46-1.03 1.1-1.03zm-2.1 14h16.8v-2H3.6zm17 .2v1.2h2v-1.2zm-.2 1.4H3.6v2h16.8zm-17-.2v-1.2h-2v1.2zm.2.2a.2.2 0 0 1-.2-.2h-2a2.2 2.2 0 0 0 2.2 2.2zm17-.2a.2.2 0 0 1-.2.2v2a2.2 2.2 0 0 0 2.2-2.2zm-.2-1.4c.11 0 .2.089.2.2h2a2.2 2.2 0 0 0-2.2-2.2zm-16.8-2a2.2 2.2 0 0 0-2.2 2.2h2c0-.111.09-.2.2-.2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Laptop02Icon);
export default ForwardRef;