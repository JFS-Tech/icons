const React = require("react");
function FastForwardIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "m10.081 11.519-6.52-6.52a.68.68 0 0 0-1.161.48v13.04a.68.68 0 0 0 1.161.482l6.52-6.52a.68.68 0 0 0 0-.962M21.4 11.519l-6.52-6.52a.68.68 0 0 0-1.16.48v13.04a.68.68 0 0 0 1.16.482l6.52-6.52a.68.68 0 0 0 0-.962"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FastForwardIcon);
module.exports = ForwardRef;