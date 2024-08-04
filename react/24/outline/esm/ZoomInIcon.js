import * as React from "react";
function ZoomInIcon({
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
    fill: "#000",
    d: "M17.622 16.321a1 1 0 0 0-1.39 1.438zm2.083 4.798a1 1 0 0 0 1.39-1.438zM10.4 14.4a1 1 0 1 0 2 0zm2-6a1 1 0 1 0-2 0zm-4 2a1 1 0 1 0 0 2zm6 2a1 1 0 1 0 0-2zm3.88-.96a6.84 6.84 0 0 1-6.84 6.84v2a8.84 8.84 0 0 0 8.84-8.84zm-6.84 6.84a6.84 6.84 0 0 1-6.84-6.84h-2a8.84 8.84 0 0 0 8.84 8.84zM4.6 11.44a6.84 6.84 0 0 1 6.84-6.84v-2a8.84 8.84 0 0 0-8.84 8.84zm6.84-6.84a6.84 6.84 0 0 1 6.84 6.84h2a8.84 8.84 0 0 0-8.84-8.84zm4.792 13.159 3.473 3.36 1.39-1.438-3.473-3.36zM12.4 14.4v-3h-2v3zm0-3v-3h-2v3zm-4 1h3v-2h-3zm3 0h3v-2h-3z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ZoomInIcon);
export default ForwardRef;