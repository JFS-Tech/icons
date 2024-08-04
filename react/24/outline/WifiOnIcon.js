const React = require("react");
function WifiOnIcon({
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
    d: "M6.011 12.187c3.308-3.21 8.671-3.21 11.979 0m-8.984 2.907c1.654-1.606 4.335-1.606 5.99 0M12 18l.017-.017M3 9.618c4.97-4.824 13.03-4.824 18 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WifiOnIcon);
module.exports = ForwardRef;