import * as React from "react";
function Grid02Icon({
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
    d: "M8.8 2.4H4.533A2.133 2.133 0 0 0 2.4 4.533V8.8m6.4 12.8H4.533A2.133 2.133 0 0 1 2.4 19.467V15.2M15.2 2.4h4.267c1.178 0 2.133.955 2.133 2.133V8.8m0 6.4v4.267a2.133 2.133 0 0 1-2.133 2.133H15.2M15 12h-2.7m0 0H9.6m2.7 0v2.7m0-2.7V9.3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Grid02Icon);
export default ForwardRef;