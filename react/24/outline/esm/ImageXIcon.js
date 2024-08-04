import * as React from "react";
function ImageXIcon({
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
    d: "m6.353 20.882 9.5-8.94 4.47 4.47m-13.97 4.47h11.176a3.353 3.353 0 0 0 3.353-3.353v-6.706m-14.53 10.06A3.353 3.353 0 0 1 3 17.528V6.353A3.353 3.353 0 0 1 6.353 3h7.265M22 7.47l-2.235-2.235m0 0L17.529 3m2.236 2.235-2.236 2.236m2.236-2.236L22 3M9.706 8.03a1.676 1.676 0 1 1-3.353 0 1.676 1.676 0 0 1 3.353 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ImageXIcon);
export default ForwardRef;