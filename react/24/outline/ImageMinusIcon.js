const React = require("react");
function ImageMinusIcon({
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
    d: "m5.697 20.5 9.059-8.526 4.263 4.263M5.697 20.5h10.658a3.197 3.197 0 0 0 3.197-3.197v-5.329M5.697 20.5A3.197 3.197 0 0 1 2.5 17.303V6.646a3.197 3.197 0 0 1 3.197-3.198h6.927m2.848 3.198H21.5M8.895 8.244a1.599 1.599 0 1 1-3.198 0 1.599 1.599 0 0 1 3.198 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ImageMinusIcon);
module.exports = ForwardRef;