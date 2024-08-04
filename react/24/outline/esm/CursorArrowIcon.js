import * as React from "react";
function CursorArrowIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M13.923 16.03c.175.42.007 2.015-.923 2.384-.93.37-2.118 0-2.118 0l-2.156-4.312L5 17.828V1l11.414 11.414h-4.253c.21.4 1.54 3.08 1.762 3.616"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0A090B",
    fillRule: "evenodd",
    d: "M6 3.414v12l3-3 2.5 5s.676.216 1 0 .646-.65.5-1c-.688-1.65-2.5-5-2.5-5H14z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CursorArrowIcon);
export default ForwardRef;