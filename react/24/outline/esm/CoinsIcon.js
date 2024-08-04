import * as React from "react";
function CoinsIcon({
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
    d: "M9.493 17.882Q8.892 18 8.253 18C4.8 18 2 15.314 2 12s2.8-6 6.253-6q.639 0 1.24.118M22 12c0 3.314-2.8 6-6.253 6s-6.254-2.686-6.254-6 2.8-6 6.254-6S22 8.686 22 12Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CoinsIcon);
export default ForwardRef;