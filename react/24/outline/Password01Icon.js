const React = require("react");
function Password01Icon({
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
    d: "M6.529 12h.14m5.33 0h.14m5.19 0h.14M2.4 15.267V8.733c0-1.178.956-2.133 2.134-2.133h14.934c1.178 0 2.133.955 2.133 2.133v6.534a2.133 2.133 0 0 1-2.133 2.133H4.533A2.133 2.133 0 0 1 2.4 15.267Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Password01Icon);
module.exports = ForwardRef;