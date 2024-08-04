import * as React from "react";
function ColumnVertical02Icon({
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
    d: "M12 3h7.027C20.117 3 21 3.883 21 4.973v14.054c0 1.09-.883 1.973-1.973 1.973H12m0-18H4.973C3.883 3 3 3.883 3 4.973v14.054C3 20.117 3.883 21 4.973 21H12m0-18v18"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ColumnVertical02Icon);
export default ForwardRef;