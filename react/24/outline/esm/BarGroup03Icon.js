import * as React from "react";
function BarGroup03Icon({
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
    d: "M14.944 21.088V3.912a1 1 0 0 0-1-1H9.885a1 1 0 0 0-1 1v17.176m6.059 0-.002-10.32a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v9.32a1 1 0 0 1-1 1zm0 0H8.885m0 0v-5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BarGroup03Icon);
export default ForwardRef;