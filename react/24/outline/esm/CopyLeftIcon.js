import * as React from "react";
function CopyLeftIcon({
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
    d: "M4 13.125V7a4 4 0 0 1 4-4h6.125M10 21h6.75A2.25 2.25 0 0 0 19 18.75V9a2.25 2.25 0 0 0-2.25-2.25H10A2.25 2.25 0 0 0 7.75 9v9.75A2.25 2.25 0 0 0 10 21Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CopyLeftIcon);
export default ForwardRef;