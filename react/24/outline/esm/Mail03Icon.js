import * as React from "react";
function Mail03Icon({
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
    d: "M4.125 6.184 12 12.694l8.438-6.51M9.656 12l-5.531 6.022m15.75-.493L14.343 12M5.25 19C4.007 19 3 17.94 3 16.632V7.368C3 6.06 4.007 5 5.25 5h13.5C19.993 5 21 6.06 21 7.368v9.264C21 17.94 19.993 19 18.75 19z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Mail03Icon);
export default ForwardRef;