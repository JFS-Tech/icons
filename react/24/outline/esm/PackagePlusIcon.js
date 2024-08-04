import * as React from "react";
function PackagePlusIcon({
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
    d: "m19.821 7.2-8.314-4.8-8.313 4.8v9.6l8.313 4.8m8.314-14.4-8.314 5.4m8.314-5.4V12m-8.314 9.6v-9m0 9 1.8-1.039m-1.8-7.961-7.8-4.8m11.4 1.8-7.8-4.8m8.1 12.9h2.7m0 0h2.7m-2.7 0V15m0 2.7v2.7"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PackagePlusIcon);
export default ForwardRef;