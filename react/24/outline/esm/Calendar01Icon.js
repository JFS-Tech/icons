import * as React from "react";
function Calendar01Icon({
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
    d: "M4.75 8.914h14M6.56 3v1.543M16.75 3v1.543m3 2.7V18.3c0 1.491-1.194 2.7-2.667 2.7H6.417c-1.473 0-2.667-1.209-2.667-2.7V7.243c0-1.491 1.194-2.7 2.667-2.7h10.666c1.473 0 2.667 1.209 2.667 2.7"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Calendar01Icon);
export default ForwardRef;