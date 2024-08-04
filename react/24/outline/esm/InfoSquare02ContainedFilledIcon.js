import * as React from "react";
function InfoSquare02ContainedFilledIcon({
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
    d: "M12 7.705v.076m-1.407 3.282h1.875v5.624M17.626 3A3.375 3.375 0 0 1 21 6.375v11.25A3.375 3.375 0 0 1 17.625 21H6.375A3.375 3.375 0 0 1 3 17.625V6.375A3.375 3.375 0 0 1 6.375 3z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(InfoSquare02ContainedFilledIcon);
export default ForwardRef;