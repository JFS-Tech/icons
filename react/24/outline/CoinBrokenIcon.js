const React = require("react");
function CoinBrokenIcon({
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
    d: "M10.2 3.977a6.982 6.982 0 0 1 9.826 9.823m-3.663.818a6.982 6.982 0 1 1-13.964 0 6.982 6.982 0 0 1 13.964 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CoinBrokenIcon);
module.exports = ForwardRef;