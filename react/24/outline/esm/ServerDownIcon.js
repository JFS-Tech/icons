import * as React from "react";
function ServerDownIcon({
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
    d: "M17.4 16.8h-6m-4.8.09v-.09m7.8-10.843L11.945 8.4m0 0L9.6 6.068M11.945 8.4v-6M16.8 12H7.2a4.8 4.8 0 1 0 0 9.6h9.6a4.8 4.8 0 0 0 0-9.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ServerDownIcon);
export default ForwardRef;