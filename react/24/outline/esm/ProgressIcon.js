import * as React from "react";
function ProgressIcon({
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
    strokeWidth: 2,
    opacity: 0.9
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.625 12a5.63 5.63 0 0 1-4.63 5.537c-.543.097-.995-.36-.995-.912v-9.25c0-.552.451-1.01.995-.912A5.63 5.63 0 0 1 17.625 12Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    clipRule: "evenodd"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ProgressIcon);
export default ForwardRef;