import * as React from "react";
function FlexColumnsIcon({
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
    d: "M9.75 6.938H6.938m2.812 3.375H6.938m10.125-3.376H14.25m2.813 3.375H14.25m-4.5 3.376H6.938m2.812 3.374H6.938M3 6.376v11.25A3.375 3.375 0 0 0 6.375 21h11.25A3.375 3.375 0 0 0 21 17.625V6.375A3.375 3.375 0 0 0 17.625 3H6.375A3.375 3.375 0 0 0 3 6.375"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FlexColumnsIcon);
export default ForwardRef;