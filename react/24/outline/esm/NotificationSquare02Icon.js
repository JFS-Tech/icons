import * as React from "react";
function NotificationSquare02Icon({
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
    d: "M11.437 3H5.25A2.25 2.25 0 0 0 3 5.25v9a2.25 2.25 0 0 0 2.25 2.25h5.307l2.38 4.5 1.876-4.5h3.937A2.25 2.25 0 0 0 21 14.25V12m0-6.187a2.812 2.812 0 1 1-5.625 0 2.812 2.812 0 0 1 5.625 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(NotificationSquare02Icon);
export default ForwardRef;