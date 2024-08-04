const React = require("react");
function ToggleRightIcon({
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
    d: "M16.25 16.25h-8.5a4.25 4.25 0 0 1 0-8.5h8.5m0 8.5a4.25 4.25 0 0 0 0-8.5m0 8.5a4.25 4.25 0 0 1 0-8.5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ToggleRightIcon);
module.exports = ForwardRef;