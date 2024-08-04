import * as React from "react";
function CurrencyBathIcon({
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
    d: "M11 4v2m0 12v2M8 6h5a3 3 0 0 1 3 3v.143A2.857 2.857 0 0 1 13.143 12H8h5a3 3 0 0 1 3 3v.143A2.857 2.857 0 0 1 13.143 18H8z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CurrencyBathIcon);
export default ForwardRef;