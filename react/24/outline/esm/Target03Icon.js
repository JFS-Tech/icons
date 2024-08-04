import * as React from "react";
function Target03Icon({
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
    d: "M12 5.5V2m0 20v-3.5m6.5-6.5H22M2 12h3.5M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Target03Icon);
export default ForwardRef;