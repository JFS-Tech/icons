import * as React from "react";
function Type02Icon({
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
    d: "M9.086 19.2h3.267m0 0h3.418m-3.418 0V4.8m0 0H7.029C6.46 4.8 6 5.26 6 5.83V7.34m6.353-2.54h4.9c.569 0 1.03.46 1.03 1.028v1.936"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Type02Icon);
export default ForwardRef;