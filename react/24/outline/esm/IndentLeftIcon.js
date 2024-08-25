import * as React from "react";
function IndentLeftIcon({
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
    d: "M2.4 3.6h19.2M12 8.8h9.6M12 14h9.6M2.4 19.2h19.2M2.4 14.4v-6l4.8 3z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(IndentLeftIcon);
export default ForwardRef;