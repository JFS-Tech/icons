import * as React from "react";
function Globe03Icon({
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
    d: "M4.125 8.75a1 1 0 0 0 0 2zm15.75 2a1 1 0 1 0 0-2zM4.219 13.812a1 1 0 1 0 0 2zm15.75 2a1 1 0 1 0 0-2zM20 12a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10zm0 16c-.213 0-.494-.094-.838-.426-.348-.337-.707-.872-1.03-1.61-.645-1.476-1.07-3.583-1.07-5.964h-2c0 2.59.458 4.982 1.238 6.765.389.89.878 1.672 1.472 2.247.6.579 1.354.988 2.228.988zm-2.937-8c0-2.38.424-4.488 1.069-5.963.323-.74.682-1.274 1.03-1.61.344-.333.625-.427.838-.427V2c-.874 0-1.629.41-2.228.988-.594.575-1.083 1.357-1.472 2.247C7.52 7.018 7.062 9.41 7.062 12zM12 22c.874 0 1.629-.41 2.228-.988.594-.575 1.083-1.358 1.472-2.247.78-1.783 1.238-4.175 1.238-6.765h-2c0 2.38-.425 4.488-1.07 5.963-.323.74-.682 1.274-1.03 1.61-.344.333-.625.427-.838.427zm4.938-10c0-2.59-.458-4.982-1.238-6.765-.389-.89-.878-1.672-1.472-2.247C13.628 2.41 12.874 2 12 2v2c.213 0 .494.094.838.426.348.337.707.872 1.03 1.61.645 1.476 1.07 3.583 1.07 5.964zM4.124 10.75h15.75v-2H4.125zm.094 5.062h15.75v-2H4.22z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Globe03Icon);
export default ForwardRef;