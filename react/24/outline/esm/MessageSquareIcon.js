import * as React from "react";
function MessageSquareIcon({
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
    d: "m6.678 21.6 5.009-5.009H19.6a2 2 0 0 0 2-2V4.4a2 2 0 0 0-2-2H4.4a2 2 0 0 0-2 2v10.191a2 2 0 0 0 2 2h2.278z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MessageSquareIcon);
export default ForwardRef;