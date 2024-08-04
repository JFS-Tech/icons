const React = require("react");
function SkewIcon({
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
    d: "m17.874 16.547 2.4-9.094m-4.927 11.62h-8.59m-3.03-2.778 2.4-8.59m2.526-2.779h8.842M4.61 7.453h3.032a1.01 1.01 0 0 0 1.01-1.01V3.41A1.01 1.01 0 0 0 7.643 2.4H4.61A1.01 1.01 0 0 0 3.6 3.41v3.032c0 .558.452 1.01 1.01 1.01Zm14.148 0h3.031a1.01 1.01 0 0 0 1.01-1.01V3.41A1.01 1.01 0 0 0 21.79 2.4h-3.031a1.01 1.01 0 0 0-1.01 1.01v3.032c0 .558.452 1.01 1.01 1.01ZM2.21 21.6h3.032a1.01 1.01 0 0 0 1.01-1.01v-3.032a1.01 1.01 0 0 0-1.01-1.01H2.21a1.01 1.01 0 0 0-1.01 1.01v3.032c0 .558.452 1.01 1.01 1.01Zm14.148 0h3.031a1.01 1.01 0 0 0 1.011-1.01v-3.032a1.01 1.01 0 0 0-1.01-1.01h-3.032a1.01 1.01 0 0 0-1.01 1.01v3.032c0 .558.452 1.01 1.01 1.01Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SkewIcon);
module.exports = ForwardRef;