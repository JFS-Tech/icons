import * as React from "react";
function LetterSpacing02Icon({
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
    d: "M21.6 2.4v19.2m-19.2 0V2.4m5.228 14.4L12 6.6l2.706 6.314m0 0 1.665 3.886m-1.665-3.886H9.571"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LetterSpacing02Icon);
export default ForwardRef;