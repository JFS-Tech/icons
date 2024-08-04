import * as React from "react";
function DotVerticalIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 7.2a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8ZM12 14.4a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8ZM12 21.6a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DotVerticalIcon);
export default ForwardRef;