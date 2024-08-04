import * as React from "react";
function Marker02Icon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21.6s7.513-6.678 7.513-11.687a7.513 7.513 0 1 0-15.026 0C4.487 14.922 12 21.6 12 21.6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.4 9.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Marker02Icon);
export default ForwardRef;