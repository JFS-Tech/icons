const React = require("react");
function Pointer01Icon({
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
    d: "m10.263 14.002 2.234 6.46c.418 1.212 2.116 1.252 2.592.063l6.408-16.018c.446-1.115-.64-2.23-1.766-1.812L3.301 8.797c-1.2.446-1.202 2.143-.003 2.593z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Pointer01Icon);
module.exports = ForwardRef;