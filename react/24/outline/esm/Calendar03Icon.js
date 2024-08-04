import * as React from "react";
function Calendar03Icon({
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
    d: "M4.75 8.914h14M6.56 3v1.543M16.75 3v1.543m0 0h-10c-1.657 0-3 1.381-3 3.086v10.285c0 1.704 1.343 3.086 3 3.086h10c1.657 0 3-1.381 3-3.086V7.63c0-1.705-1.343-3.086-3-3.086m-9.5 7.971h9m-9 4.115h9"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Calendar03Icon);
export default ForwardRef;