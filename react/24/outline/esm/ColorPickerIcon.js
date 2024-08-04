import * as React from "react";
function ColorPickerIcon({
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
    d: "m10.473 6.607 6.92 6.92M2.4 16.987 16.03 3.355a3.262 3.262 0 0 1 4.614 4.614L7.013 21.599H2.4z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ColorPickerIcon);
export default ForwardRef;