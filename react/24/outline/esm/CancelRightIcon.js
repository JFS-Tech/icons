import * as React from "react";
function CancelRightIcon({
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
    d: "m8.625 15.375 6.75-6.75M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z",
    opacity: 0.9
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CancelRightIcon);
export default ForwardRef;