import * as React from "react";
function FileEye01Icon({
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
    d: "M11.4 21.6h-6A2.4 2.4 0 0 1 3 19.2V4.8a2.4 2.4 0 0 1 2.4-2.4h10.8a2.4 2.4 0 0 1 2.4 2.4v4.8m-1.8 6.54v-.063m4.2.114s-.996 2.94-4.2 2.889-4.2-2.889-4.2-2.889.956-2.99 4.2-2.99 4.2 2.99 4.2 2.99"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileEye01Icon);
export default ForwardRef;