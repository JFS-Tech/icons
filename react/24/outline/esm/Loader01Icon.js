import * as React from "react";
function Loader01Icon({
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
    d: "M12 7.114V3m0 18v-4.114M16.886 12H21M3 12h4.114m8.341-3.455 2.91-2.909M5.634 18.364l2.91-2.91m6.91 0 2.91 2.91M5.634 5.636l2.91 2.91"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Loader01Icon);
export default ForwardRef;