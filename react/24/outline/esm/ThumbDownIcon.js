import * as React from "react";
function ThumbDownIcon({
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
    d: "m16.999 4-3.76-.94a2 2 0 0 0-.485-.06H8.736a2 2 0 0 0-1.789 1.106l-3.5 7A2 2 0 0 0 5.236 14H12m4.999-10L17 13l-3.392 5.088A3.6 3.6 0 0 0 13 20.096a.905.905 0 0 1-.905.904h-.096a2 2 0 0 1-2-2v-5m7-10H19a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ThumbDownIcon);
export default ForwardRef;