import * as React from "react";
function SpaceVerticalIcon({
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
    d: "M21.6 2.4v19.2M2.4 2.4v19.2M7.8 4.8v14.4a2.4 2.4 0 0 0 2.4 2.4h3.6a2.4 2.4 0 0 0 2.4-2.4V4.8a2.4 2.4 0 0 0-2.4-2.4h-3.6a2.4 2.4 0 0 0-2.4 2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SpaceVerticalIcon);
export default ForwardRef;