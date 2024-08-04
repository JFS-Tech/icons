const React = require("react");
function ChevronDoubleUpIcon({
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
    d: "M5.8 10.6 11.4 5l5.6 5.6M5.8 19l5.6-5.6L17 19"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChevronDoubleUpIcon);
module.exports = ForwardRef;