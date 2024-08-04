import * as React from "react";
function FolderIcon({
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
    d: "M2.4 8.417v9.524a2 2 0 0 0 2 2h15.2a2 2 0 0 0 2-2V8.013a1 1 0 0 0-1-1h-8.516L9.319 4.058H3.4a1 1 0 0 0-1 1z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderIcon);
export default ForwardRef;