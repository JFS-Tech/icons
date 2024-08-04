import * as React from "react";
function HelpSquareContainedIcon({
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
    d: "M12 16.5v.04M9.751 9.23c0-1.266 1.007-2.293 2.25-2.293s2.25 1.027 2.25 2.293-1.007 2.292-2.25 2.292L12 13.051m9-6.676v11.25A3.375 3.375 0 0 1 17.625 21H6.375A3.375 3.375 0 0 1 3 17.625V6.375A3.375 3.375 0 0 1 6.375 3h11.25A3.375 3.375 0 0 1 21 6.375"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HelpSquareContainedIcon);
export default ForwardRef;