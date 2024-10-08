const React = require("react");
function Luggage04Icon({
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
    d: "M8.438 7.632V5.36c0-.628.531-1.137 1.187-1.137h4.156c.656 0 1.188.51 1.188 1.137v2.273M4.875 19h14.25c1.312 0 2.375-1.018 2.375-2.274v-6.82c0-1.256-1.063-2.274-2.375-2.274H4.875C3.563 7.632 2.5 8.65 2.5 9.906v6.82C2.5 17.982 3.563 19 4.875 19Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Luggage04Icon);
module.exports = ForwardRef;