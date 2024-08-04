import * as React from "react";
function ArrowDownLeftContainedIcon({
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
    fill: "#000",
    d: "M14.253 16.277a1 1 0 0 0 .181-1.992zm-5.066-1.465-.995.091a1 1 0 0 0 .905.905zm.528-5.246a1 1 0 1 0-1.992.18zm5.805.329a1 1 0 0 0-1.415-1.415zm-1.086 4.39-5.156-.468-.181 1.991 5.156.47zm-4.25.437-.47-5.156-1.991.18.469 5.157zm-.29.798 5.626-5.625-1.415-1.415-5.625 5.625zM12 20a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10zm8 8a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowDownLeftContainedIcon);
export default ForwardRef;