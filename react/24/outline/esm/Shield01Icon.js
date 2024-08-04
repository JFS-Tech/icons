import * as React from "react";
function Shield01Icon({
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
    strokeLinejoin: "round",
    d: "M12 2.4C9.303 4.693 7.613 4.8 4.8 4.8v9.228c0 3.682 2.562 4.643 7.2 7.572 4.638-2.929 7.2-3.89 7.2-7.572V4.8c-2.813 0-4.503-.107-7.2-2.4Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Shield01Icon);
export default ForwardRef;