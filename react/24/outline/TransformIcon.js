const React = require("react");
function TransformIcon({
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
    d: "M19.074 16.547V7.453m-2.527 11.62h-8.59m-3.03-2.778v-8.59m2.526-2.779h8.842M3.41 7.453h3.032a1.01 1.01 0 0 0 1.01-1.011V3.41a1.01 1.01 0 0 0-1.01-1.01H3.41A1.01 1.01 0 0 0 2.4 3.41v3.032c0 .558.452 1.01 1.01 1.01Zm14.148 0h3.031a1.01 1.01 0 0 0 1.01-1.011V3.41a1.01 1.01 0 0 0-1.01-1.01h-3.031a1.01 1.01 0 0 0-1.01 1.01v3.032c0 .558.452 1.01 1.01 1.01ZM3.41 21.6h3.032a1.01 1.01 0 0 0 1.01-1.01v-3.032a1.01 1.01 0 0 0-1.01-1.01H3.41a1.01 1.01 0 0 0-1.01 1.01v3.031c0 .559.452 1.01 1.01 1.01Zm14.148 0h3.031a1.01 1.01 0 0 0 1.01-1.01v-3.032a1.01 1.01 0 0 0-1.01-1.01h-3.031a1.01 1.01 0 0 0-1.01 1.01v3.031c0 .559.452 1.01 1.01 1.01Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TransformIcon);
module.exports = ForwardRef;