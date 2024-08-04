const React = require("react");
function SkipBackIcon({
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
    d: "M5 20.148V3.852m12.564 16.897L9.5 12.601a.856.856 0 0 1 0-1.202l8.064-8.148c.53-.536 1.436-.157 1.436.6v16.297c0 .758-.906 1.137-1.436.601"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SkipBackIcon);
module.exports = ForwardRef;