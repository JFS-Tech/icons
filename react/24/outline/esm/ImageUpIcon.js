import * as React from "react";
function ImageUpIcon({
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
    d: "m6.375 21 9.563-9 4.5 4.5M6.374 21h11.25A3.375 3.375 0 0 0 21 17.625V12M6.375 21A3.375 3.375 0 0 1 3 17.625V6.375A3.375 3.375 0 0 1 6.375 3h7.313M16.5 5.29 18.8 3m0 0L21 5.186M18.8 3v5.625m-9.05-.562a1.688 1.688 0 1 1-3.375 0 1.688 1.688 0 0 1 3.375 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ImageUpIcon);
export default ForwardRef;