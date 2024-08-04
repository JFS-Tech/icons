const React = require("react");
function ArrowRefresh04Icon({
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
    d: "M8 19.369a8.01 8.01 0 0 1-4-6.94 8.01 8.01 0 0 1 5-7.428m0 11.935v4.005H5M16 5.572a8.01 8.01 0 0 1 4 6.94 8.01 8.01 0 0 1-5 7.428m0-11.935V4h4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowRefresh04Icon);
module.exports = ForwardRef;