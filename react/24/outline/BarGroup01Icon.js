const React = require("react");
function BarGroup01Icon({
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
    d: "M9.056 21v-9.976a1 1 0 0 1 1-1h4.059a1 1 0 0 1 1 1V21m-6.059 0 .002-4.32a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1zm0 0h6.059m0 0V4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BarGroup01Icon);
module.exports = ForwardRef;