import * as React from "react";
function ColumnHorizontal02Icon({
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
    d: "M3.462 12.247H21M18.78 21H4.943C3.87 21 3 20.117 3 19.027V4.973C3 3.883 3.87 3 4.942 3h13.839c1.072 0 1.942.883 1.942 1.973v14.054c0 1.09-.87 1.973-1.942 1.973Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ColumnHorizontal02Icon);
export default ForwardRef;