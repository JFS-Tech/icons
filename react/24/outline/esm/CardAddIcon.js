import * as React from "react";
function CardAddIcon({
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
    d: "M13.84 18.64h-9.6a2.4 2.4 0 0 1-2.4-2.4v-9a2.4 2.4 0 0 1 2.4-2.4h14.4a2.4 2.4 0 0 1 2.4 2.4v4.2m-18.6-2.4h18m-.806 10.12v-2.526m0 0v-2.526m0 2.526h-2.527m2.527 0h2.526"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CardAddIcon);
export default ForwardRef;