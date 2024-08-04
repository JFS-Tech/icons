import * as React from "react";
function Colors02Icon({
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
    d: "M5.89 18.02h1.164m9.31-4.655h2.909a2.327 2.327 0 0 1 2.327 2.328v3.49a2.327 2.327 0 0 1-2.327 2.328H7.054m4.073-14.763 3.577-3.577a2.327 2.327 0 0 1 3.291 0l2.469 2.469a2.327 2.327 0 0 1 0 3.29l-9.919 9.92m-5.818 2.66h3.491a2.327 2.327 0 0 0 2.327-2.327V5.22a2.327 2.327 0 0 0-2.327-2.327h-3.49A2.327 2.327 0 0 0 2.4 5.22v13.964a2.327 2.327 0 0 0 2.327 2.327"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Colors02Icon);
export default ForwardRef;