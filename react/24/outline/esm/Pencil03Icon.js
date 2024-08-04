import * as React from "react";
function Pencil03Icon({
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
    d: "M4.8 15.6 9 19.2m3 3h9.6M4.2 15.6 16.03 3.355a3.262 3.262 0 0 1 4.614 4.614L8.4 19.799l-6 1.8z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Pencil03Icon);
export default ForwardRef;