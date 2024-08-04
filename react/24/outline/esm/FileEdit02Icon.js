import * as React from "react";
function FileEdit02Icon({
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
    d: "M9.557 21.557h-4.8a2.4 2.4 0 0 1-2.4-2.4v-14.4a2.4 2.4 0 0 1 2.4-2.4h10.8a2.4 2.4 0 0 1 2.4 2.4v4.8m-11.4-2.4h7.2m-7.2 3.6h7.2m-7.2 3.6h3.6m3 3.891 5.092-5.09 3.394 3.393-5.091 5.092h-3.395z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileEdit02Icon);
export default ForwardRef;