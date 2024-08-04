import * as React from "react";
function Stopwatch03Icon({
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
    fill: "#000",
    d: "M17.554 6.145a1 1 0 1 0 1.414 1.414zm2.249-3.34a1 1 0 0 0-1.415 1.415zm1.09 3.92a1 1 0 1 0 1.414-1.415zM13 9.84a1 1 0 1 0-2 0zm-2 3.377a1 1 0 1 0 2 0zM9.5 1a1 1 0 0 0 0 2zm5 2a1 1 0 1 0 0-2zm4.468 4.56 2.087-2.088-1.414-1.414-2.087 2.087zm-.58-3.34 1.253 1.252 1.414-1.414-1.252-1.252zm1.253 1.252 1.252 1.252 1.414-1.414-1.252-1.252zM11 9.841v3.377h2V9.84zM9.5 3h5V1h-5zm10 10.429C19.5 17.619 16.134 21 12 21v2c5.255 0 9.5-4.293 9.5-9.571zM12 21c-4.134 0-7.5-3.382-7.5-7.571h-2C2.5 18.707 6.745 23 12 23zm-7.5-7.571c0-4.19 3.366-7.572 7.5-7.572v-2c-5.255 0-9.5 4.293-9.5 9.572zM12 5.857c4.134 0 7.5 3.382 7.5 7.572h2c0-5.279-4.245-9.572-9.5-9.572z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Stopwatch03Icon);
export default ForwardRef;