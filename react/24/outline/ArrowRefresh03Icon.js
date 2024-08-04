const React = require("react");
function ArrowRefresh03Icon({
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
    d: "M16 19.369a8.01 8.01 0 0 0 4-6.94 8.01 8.01 0 0 0-5-7.428m0 11.935v4.005h4M8 5.572a8.01 8.01 0 0 0-4 6.94 8.01 8.01 0 0 0 5 7.428M9 8.005V4H5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowRefresh03Icon);
module.exports = ForwardRef;