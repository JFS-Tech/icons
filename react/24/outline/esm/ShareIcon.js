import * as React from "react";
function ShareIcon({
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
    d: "M3.6 15.22v3.706c0 .561.221 1.1.615 1.497s.928.62 1.485.62h12.6a2.1 2.1 0 0 0 1.485-.62c.394-.397.615-.936.615-1.497V15.22m-8.356-.264v-12m0 0-4.8 4.586m4.8-4.585 4.8 4.585"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ShareIcon);
export default ForwardRef;