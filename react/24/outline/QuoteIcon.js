const React = require("react");
function QuoteIcon({
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
    d: "M19.851 6a6.13 6.13 0 0 0-6.128 6.128c0 1.499.847 4.375 2.298 5.16M9.128 6A6.13 6.13 0 0 0 3 12.128c0 1.499.847 4.375 2.298 5.16M21 14.808a3.064 3.064 0 1 1-6.128 0 3.064 3.064 0 0 1 6.128 0m-10.723 0a3.064 3.064 0 1 1-6.128 0 3.064 3.064 0 0 1 6.128 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(QuoteIcon);
module.exports = ForwardRef;