import * as React from "react";
function Note01Icon({
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
    d: "M18.569 4.421 13.516 2.4v15.158a4.041 4.041 0 1 1-2.021-3.501c.337.156 1.69 1.242 2.02 1.986"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Note01Icon);
export default ForwardRef;