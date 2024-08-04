const React = require("react");
function LineChartUp01Icon({
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
    d: "M2.4 2.4v19.2h19.2M7.2 14.4l4.2-4.2 3 3L21 6.6M16.51 6h5.09v5.091"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LineChartUp01Icon);
module.exports = ForwardRef;