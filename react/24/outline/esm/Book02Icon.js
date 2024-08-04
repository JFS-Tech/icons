import * as React from "react";
function Book02Icon({
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
    d: "M11.726 20.229V5.417m0 14.812-1.458-1.458a4.39 4.39 0 0 0-3.103-1.285H3.496A1.096 1.096 0 0 1 2.4 16.389V4.869c0-.606.491-1.098 1.097-1.098h4.217c1.163 0 2.28.463 3.103 1.286l.909.909.908-.91a4.4 4.4 0 0 1 3.104-1.285h4.765c.606 0 1.097.492 1.097 1.098v11.52c0 .606-.491 1.097-1.097 1.097h-4.217c-1.164 0-2.28.462-3.103 1.285z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Book02Icon);
export default ForwardRef;