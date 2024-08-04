const React = require("react");
function Minimise02Icon({
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
    d: "M3.56 13.49h6.951m0 0v6.951m0-6.951-8.11 8.11m18.04-11.09h-6.952m0 0V3.56m0 6.951 8.11-8.11"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Minimise02Icon);
module.exports = ForwardRef;