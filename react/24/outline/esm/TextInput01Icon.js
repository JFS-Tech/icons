import * as React from "react";
function TextInput01Icon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.8 4.8h3.6M6.6 8.4h-3a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 0 0 1.2 1.2h3m4.2-7.2h9.6a1.2 1.2 0 0 1 1.2 1.2v4.8a1.2 1.2 0 0 1-1.2 1.2h-9.6m-4.2 3.6V4.8M4.8 19.2h3.6"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TextInput01Icon);
export default ForwardRef;