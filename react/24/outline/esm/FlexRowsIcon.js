import * as React from "react";
function FlexRowsIcon({
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
    d: "M17.063 9.75V6.938M13.688 9.75V6.938m-3.376 10.125V14.25m-3.374 2.813V14.25m3.375-4.5V6.938M6.937 9.75V6.938M17.626 3H6.375A3.375 3.375 0 0 0 3 6.375v11.25A3.375 3.375 0 0 0 6.375 21h11.25A3.375 3.375 0 0 0 21 17.625V6.375A3.375 3.375 0 0 0 17.625 3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FlexRowsIcon);
export default ForwardRef;