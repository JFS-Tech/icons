import * as React from "react";
function Upload02Icon({
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
    d: "M12.001 14.943V3m0 0L7.068 7.563M12.001 3l4.933 4.563M4 18.966v1.417c.405.395.954.617 1.526.617h12.948c.572 0 1.121-.222 1.526-.617v-1.417"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Upload02Icon);
export default ForwardRef;