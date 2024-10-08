import * as React from "react";
function LinkIcon({
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
    d: "M10.012 7.453h-3.16A4.45 4.45 0 0 0 2.4 11.97a4.45 4.45 0 0 0 1.294 3.205c.857.87 1.96 1.333 3.14 1.333h3.158m3.996.038h3.159a4.45 4.45 0 0 0 4.452-4.518 4.54 4.54 0 0 0-1.313-3.186 4.4 4.4 0 0 0-3.14-1.332h-3.158m-6.736 4.447h9.476"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LinkIcon);
export default ForwardRef;