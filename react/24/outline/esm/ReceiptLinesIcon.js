import * as React from "react";
function ReceiptLinesIcon({
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
    d: "M7.8 7.8h8.4m-8.4 4.8h8.4M5.76 3h12.48c.862 0 1.56.806 1.56 1.8V21l-2.6-1.8-2.6 1.8-2.6-1.8L9.4 21l-2.6-1.8L4.2 21V4.8c0-.994.698-1.8 1.56-1.8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ReceiptLinesIcon);
export default ForwardRef;