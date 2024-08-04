import * as React from "react";
function ImageQuestionIcon({
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
    d: "m6.375 21.125 9.563-9 4.5 4.5m-14.063 4.5h11.25A3.375 3.375 0 0 0 21 17.75v-6.187M6.375 21.124A3.375 3.375 0 0 1 3 17.75V6.5a3.375 3.375 0 0 1 3.375-3.375h6.188M16.5 4.201C16.5 2.985 17.507 2 18.75 2S21 2.985 21 4.201s-1.007 2.201-2.25 2.201m0 2.995v-.085m-9-1.124a1.688 1.688 0 1 1-3.375 0 1.688 1.688 0 0 1 3.375 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ImageQuestionIcon);
export default ForwardRef;