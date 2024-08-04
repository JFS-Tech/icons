import * as React from "react";
function PaperclipIcon({
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
    d: "M9.857 7.929v6a2.143 2.143 0 0 0 4.286 0V7.715a4.071 4.071 0 0 0-8.143 0v6.642a6 6 0 0 0 12 0V7.93"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PaperclipIcon);
export default ForwardRef;