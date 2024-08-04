import * as React from "react";
function CardLockIcon({
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
    d: "M12 18.3H4.2a2.4 2.4 0 0 1-2.4-2.4v-9a2.4 2.4 0 0 1 2.4-2.4h14.4A2.4 2.4 0 0 1 21 6.9v1.8m-18.6 0h18M17.7 15v-1a1.5 1.5 0 0 1 3 0v1.5m-3.5 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CardLockIcon);
export default ForwardRef;