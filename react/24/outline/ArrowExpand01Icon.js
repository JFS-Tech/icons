const React = require("react");
function ArrowExpand01Icon({
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
    d: "M8 20H4m0 0v-4m0 4 4.5-4.5M16 4h4m0 0v4m0-4-4.5 4.5M4 8V4m0 0h4M4 4l4.5 4.5M20 16v4m0 0h-4m4 0-4.5-4.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowExpand01Icon);
module.exports = ForwardRef;