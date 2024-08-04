import * as React from "react";
function ArrowRefresh06Icon({
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
    d: "M6.49 17.51a8.5 8.5 0 0 1 7.725-14.336m5.137 3.295a8.502 8.502 0 0 1-8.825 13.3m7.141-11.934V4.647h3.188zM7.24 15.075v3.187H4.053z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowRefresh06Icon);
export default ForwardRef;