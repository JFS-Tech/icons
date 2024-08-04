const React = require("react");
function CurrencyCoinBitcoinIcon({
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
    d: "M8.4 8.02h5.385a2.02 2.02 0 1 1 0 4.038m0 0a2.02 2.02 0 0 1 0 4.038H8.4m5.385-4.038H9.746m0-4.039v8.077M10.42 6v2.02M13.111 6v2.02m-2.692 8.076v2.02m2.692-2.02v2.02M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CurrencyCoinBitcoinIcon);
module.exports = ForwardRef;