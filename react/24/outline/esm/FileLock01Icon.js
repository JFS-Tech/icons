import * as React from "react";
function FileLock01Icon({
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
    d: "M9.6 21.6H7.2A3.6 3.6 0 0 1 3.6 18V6a3.6 3.6 0 0 1 3.6-3.6h8.4A3.6 3.6 0 0 1 19.2 6v3M15 15v-1.2a1.8 1.8 0 0 1 3.6 0v1.8m-4.2 6h4.8a1.2 1.2 0 0 0 1.2-1.2v-3.6a1.2 1.2 0 0 0-1.2-1.2h-4.8a1.2 1.2 0 0 0-1.2 1.2v3.6a1.2 1.2 0 0 0 1.2 1.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileLock01Icon);
export default ForwardRef;