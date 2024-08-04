const React = require("react");
function Lightbulb03Icon({
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
    d: "M14.4 15v4.2a1.2 1.2 0 0 1-1.2 1.2h-2.4a1.2 1.2 0 0 1-1.2-1.2V15M18 9.6a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Lightbulb03Icon);
module.exports = ForwardRef;