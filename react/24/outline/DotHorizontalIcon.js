const React = require("react");
function DotHorizontalIcon({
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
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.2 12a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM14.4 12a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM21.6 12a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DotHorizontalIcon);
module.exports = ForwardRef;