const React = require("react");
function HorizontalChart03Icon({
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
    d: "M2.912 14.355H14.29m-11.378 0 11.32-.001h.058m-11.378 0v3.886c0 .53.537.96 1.2.96h10.12c.663 0 1.2-.43 1.2-.96v-2.926c0-.515-.506-.935-1.142-.96m-11.378 0V9.509m11.378 4.847h5.598c.663 0 1.2-.43 1.2-.96v-2.927c0-.53-.537-.96-1.2-.96m-16.976 0h16.976m-16.976 0V5.76c0-.53.537-.96 1.2-.96h4.8c.663 0 1.2.43 1.2.96v2.788c0 .53-.537.96-1.2.96h10.976M2.912 21.6V2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HorizontalChart03Icon);
module.exports = ForwardRef;