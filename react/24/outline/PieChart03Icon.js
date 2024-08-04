const React = require("react");
function PieChart03Icon({
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
    d: "M21.6 12A9.6 9.6 0 0 0 12 2.4m9.6 9.6q0 0 0 0m0 0A9.6 9.6 0 1 1 12 2.4m9.6 9.6H12m0-9.6V12m0 0-6.6 6.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PieChart03Icon);
module.exports = ForwardRef;