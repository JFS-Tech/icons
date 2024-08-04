const React = require("react");
function ClockBackwardIcon({
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
    d: "M19.505 12c0 4.97-4.03 9-9.003 9S1.5 16.97 1.5 12s4.03-9 9.002-9A9 9 0 0 1 18.3 7.5m-1.265 5.488 2.25-2.25 2.251 2.25m-7.661 1.466L10.5 13.33V8.625"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ClockBackwardIcon);
module.exports = ForwardRef;