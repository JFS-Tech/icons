const React = require("react");
function BatteryFill01Icon({
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
    d: "M22.2 13.8v-3.6M6.6 9.6H5.4v4.8h1.2m0-4.8h1.2v4.8H6.6m0-4.8v4.8M4.2 18h12a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 16.2 6h-12a2.4 2.4 0 0 0-2.4 2.4v7.2A2.4 2.4 0 0 0 4.2 18"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BatteryFill01Icon);
module.exports = ForwardRef;