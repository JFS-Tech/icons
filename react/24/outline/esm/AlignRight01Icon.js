import * as React from "react";
function AlignRight01Icon({
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
    d: "M21.6 21.6V2.4M4.8 16.2h9.6a2.4 2.4 0 0 0 2.4-2.4v-3.6a2.4 2.4 0 0 0-2.4-2.4H4.8a2.4 2.4 0 0 0-2.4 2.4v3.6a2.4 2.4 0 0 0 2.4 2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AlignRight01Icon);
export default ForwardRef;