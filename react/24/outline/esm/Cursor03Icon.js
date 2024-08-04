import * as React from "react";
function Cursor03Icon({
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
    d: "m18.522 21.364 2.842-2.842a.804.804 0 0 0 0-1.137l-4.481-4.482a.804.804 0 0 1 .066-1.196l3.768-3.014a.804.804 0 0 0-.282-1.401l-17.01-4.86a.804.804 0 0 0-.993.994l4.86 17.01a.804.804 0 0 0 1.4.28l3.015-3.767a.804.804 0 0 1 1.196-.066l4.482 4.481a.804.804 0 0 0 1.137 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Cursor03Icon);
export default ForwardRef;