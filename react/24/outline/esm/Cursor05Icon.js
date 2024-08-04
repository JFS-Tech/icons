import * as React from "react";
function Cursor05Icon({
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
    d: "M5.62 12.436 4.34 13.714m-.134-4.686H2.4M4.34 4.34 5.619 5.62M9.028 2.4v1.807m4.686.134L12.436 5.62m3.581 10.375 4.603-1.606c.862-.301.896-1.51.05-1.845L10.142 8.877c-.791-.314-1.587.463-1.293 1.262l3.448 10.823c.314.853 1.521.85 1.844-.004z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Cursor05Icon);
export default ForwardRef;