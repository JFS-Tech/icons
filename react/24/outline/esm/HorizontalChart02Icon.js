import * as React from "react";
function HorizontalChart02Icon({
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
    d: "M3 14.355h4.178m-4.178 0 4.12-.001h.058m-4.178 0v3.886c0 .53.537.96 1.2.96h2.92c.663 0 1.2-.43 1.2-.96v-2.926c0-.515-.506-.935-1.142-.96m-4.178 0V9.509m4.178 4.847h5.598c.663 0 1.2-.43 1.2-.96v-2.927c0-.53-.537-.96-1.2-.96M3 9.508h9.776M3 9.508V5.76c0-.53.537-.96 1.2-.96h15.6c.663 0 1.2.43 1.2.96v2.788c0 .53-.537.96-1.2.96h-7.024M3 21.6V2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HorizontalChart02Icon);
export default ForwardRef;