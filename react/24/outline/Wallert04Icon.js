const React = require("react");
function Wallert04Icon({
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
    strokeLinejoin: "round",
    d: "M20.64 14.76v2.44a2 2 0 0 1-2 2H4.4a2 2 0 0 1-2-2V6.8a2 2 0 0 1 2-2h14.24a2 2 0 0 1 2 2v2.37m.96 5.59h-3.12a2.64 2.64 0 0 1 0-5.28h3.12z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Wallert04Icon);
module.exports = ForwardRef;