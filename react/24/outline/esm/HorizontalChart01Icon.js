import * as React from "react";
function HorizontalChart01Icon({
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
    d: "M3 9.645h4.178M3 9.645l4.12.001h.058M3 9.645V5.76c0-.53.537-.96 1.2-.96h2.92c.663 0 1.2.43 1.2.96v2.926c0 .515-.506.935-1.142.96M3 9.645v4.846m4.178-4.847h5.598c.663 0 1.2.43 1.2.96v2.927c0 .53-.537.96-1.2.96m-9.776 0h9.776m-9.776 0v3.748c0 .53.537.96 1.2.96h15.6c.663 0 1.2-.43 1.2-.96v-2.788c0-.53-.537-.96-1.2-.96h-7.024M3 21.6V2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HorizontalChart01Icon);
export default ForwardRef;