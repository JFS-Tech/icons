import * as React from "react";
function Volume06Icon({
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
    d: "M18.77 9.345c1.479 1.823 1.688 4.249.28 6.396M13.96 5 9.077 9.07H4v5.86l5.077-.002L13.96 19z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Volume06Icon);
export default ForwardRef;