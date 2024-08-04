import * as React from "react";
function Cursor01Icon({
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
    d: "m12.565 18.308 6.31 3.068c1.184.575 2.446-.628 1.928-1.837L13.827 3.261c-.485-1.132-2.083-1.152-2.597-.032L3.734 19.583c-.548 1.195.682 2.429 1.88 1.885z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Cursor01Icon);
export default ForwardRef;