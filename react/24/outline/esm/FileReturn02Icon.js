import * as React from "react";
function FileReturn02Icon({
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
    d: "M10.5 21.6h-6a2.4 2.4 0 0 1-2.4-2.4V4.8a2.4 2.4 0 0 1 2.4-2.4h10.8a2.4 2.4 0 0 1 2.4 2.4v4.8M6.3 7.2h7.2m-7.2 3.6h7.2m-7.2 3.6h3.6m5.443 6L12.9 17.946m0 0 2.332-2.346M12.9 17.946h7.227a1.773 1.773 0 0 0 0-3.546H17.7"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileReturn02Icon);
export default ForwardRef;