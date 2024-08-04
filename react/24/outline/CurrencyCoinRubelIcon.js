const React = require("react");
function CurrencyCoinRubelIcon({
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
    d: "M9.327 16.8V7.2h4.582c.608 0 1.19.217 1.62.602.43.386.67.91.67 1.455 0 .546-.24 1.069-.67 1.455a2.43 2.43 0 0 1-1.62.602h-6.11m6.11 2.743h-6.11M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CurrencyCoinRubelIcon);
module.exports = ForwardRef;