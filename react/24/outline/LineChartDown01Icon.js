const React = require("react");
function LineChartDown01Icon({
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
    d: "M2.4 2.4v19.2h19.2M7.2 6l4.2 4.2 3-3 6.599 6.6m-4.49.6h5.09V9.309"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LineChartDown01Icon);
module.exports = ForwardRef;