import * as React from "react";
function CopyRightIcon({
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
    d: "M20 13.125V6a3 3 0 0 0-3-3H9.875M14 21H7.25A2.25 2.25 0 0 1 5 18.75V9a2.25 2.25 0 0 1 2.25-2.25H14A2.25 2.25 0 0 1 16.25 9v9.75A2.25 2.25 0 0 1 14 21Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CopyRightIcon);
export default ForwardRef;