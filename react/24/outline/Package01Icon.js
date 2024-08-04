const React = require("react");
function Package01Icon({
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
    d: "m12 21.6 8.314-4.8V7.2L12 2.4 3.686 7.2v9.6zm0 0v-9m0 0L4.2 7.8m7.8 4.8 7.8-4.8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Package01Icon);
module.exports = ForwardRef;