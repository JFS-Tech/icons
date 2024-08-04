const React = require("react");
function Lightbulb02Icon({
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
    d: "M9.6 21.6h4.8M6 8.4a6 6 0 1 1 12 0c0 2.46-1.48 4.474-3.6 5.4v3.6a1.2 1.2 0 0 1-1.2 1.2h-2.4a1.2 1.2 0 0 1-1.2-1.2v-3.5A6 6 0 0 1 6 8.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Lightbulb02Icon);
module.exports = ForwardRef;