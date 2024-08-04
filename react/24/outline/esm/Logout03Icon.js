import * as React from "react";
function Logout03Icon({
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
    d: "M9.353 16.2v2.1c0 .557.223 1.091.62 1.485s.936.615 1.498.615h7.411c.562 0 1.1-.221 1.498-.615s.62-.928.62-1.485V5.7c0-.557-.223-1.091-.62-1.485a2.13 2.13 0 0 0-1.498-.615h-7.411c-.562 0-1.1.221-1.498.615s-.62.928-.62 1.485v2.1m6.353 4.2H3m0 0 3.176 3.15M3 12l3.176-3.15"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Logout03Icon);
export default ForwardRef;