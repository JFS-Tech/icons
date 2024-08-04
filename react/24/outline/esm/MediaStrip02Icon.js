import * as React from "react";
function MediaStrip02Icon({
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
    d: "M7.2 21V3m9.6 18V3M2.4 12h19.2M2.4 7.2h4.8m9.6 0h4.8M2.4 16.8h4.8m9.6 0h4.8M2.4 18V6A3.6 3.6 0 0 1 6 2.4h12A3.6 3.6 0 0 1 21.6 6v12a3.6 3.6 0 0 1-3.6 3.6H6A3.6 3.6 0 0 1 2.4 18"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MediaStrip02Icon);
export default ForwardRef;