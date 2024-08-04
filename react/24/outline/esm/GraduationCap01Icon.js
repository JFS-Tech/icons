import * as React from "react";
function GraduationCap01Icon({
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
    d: "m5.43 11.968 5.935 3.537a1 1 0 0 0 1.024 0l9.584-5.712a.5.5 0 0 0 0-.859l-9.584-5.711a1 1 0 0 0-1.024 0L1.78 8.934a.5.5 0 0 0 0 .859zm0 0v6.244a1 1 0 0 0 .464.843l4.948 3.146a2 2 0 0 0 2.09.034l5.392-3.184a1 1 0 0 0 .492-.861v-6.222"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GraduationCap01Icon);
export default ForwardRef;