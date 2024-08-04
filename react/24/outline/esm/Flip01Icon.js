import * as React from "react";
function Flip01Icon({
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
    d: "M12 19.2v-2.4m0-4.2v-2.4M12 6V3.6m-9.6 12V7.2l6 4.2zm19.2-8.4v8.4l-6-4.2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Flip01Icon);
export default ForwardRef;