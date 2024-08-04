import * as React from "react";
function PassportIcon({
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
    d: "M9.6 16.8h4.8m-7.6 4.8h10.4a2 2 0 0 0 2-2V4.4a2 2 0 0 0-2-2H6.8a2 2 0 0 0-2 2v15.2a2 2 0 0 0 2 2m7.6-13.2a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PassportIcon);
export default ForwardRef;