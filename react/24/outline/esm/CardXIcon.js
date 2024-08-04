import * as React from "react";
function CardXIcon({
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
    d: "M14.21 18.9h-9.6a2.4 2.4 0 0 1-2.4-2.4v-9a2.4 2.4 0 0 1 2.4-2.4h14.4a2.4 2.4 0 0 1 2.4 2.4v4.2M2.81 9.3h18m-2.593 9.38 1.787-1.786m0 0 1.786-1.786m-1.787 1.786-1.786-1.786m1.787 1.786 1.786 1.786"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CardXIcon);
export default ForwardRef;