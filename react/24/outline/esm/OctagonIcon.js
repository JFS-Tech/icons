import * as React from "react";
function OctagonIcon({
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
    strokeLinejoin: "round",
    d: "M15.944 2.4 21.577 8l.023 7.944-5.6 5.633-7.944.023L2.423 16 2.4 8.055 8 2.423z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(OctagonIcon);
export default ForwardRef;