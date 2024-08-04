import * as React from "react";
function Bag01Icon({
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
    d: "m5.4 9.624 4.83-5.27a2.4 2.4 0 0 1 3.54 0l4.83 5.27m2.597 1.297-2.732 8.8a1 1 0 0 1-.955.703H6.555a1 1 0 0 1-.953-.697l-2.79-8.8a1 1 0 0 1 .954-1.303h16.476a1 1 0 0 1 .955 1.297"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Bag01Icon);
export default ForwardRef;