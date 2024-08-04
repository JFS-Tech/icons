import * as React from "react";
function Italics01Icon({
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
    d: "m10.553 19 3.894-14m-3.894 14H6.5m4.053 0h4.052m-.158-14h-4.052m4.052 0H18.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Italics01Icon);
export default ForwardRef;