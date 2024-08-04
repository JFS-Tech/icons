const React = require("react");
function ImageCheckIcon({
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
    d: "m6.306 20.633 9.367-8.817 4.408 4.408M6.306 20.633h11.02a3.306 3.306 0 0 0 3.307-3.307V9.612M6.306 20.632A3.306 3.306 0 0 1 3 17.327V6.306A3.306 3.306 0 0 1 6.306 3h8.265m.92 2.755 1.652 1.653L21 3.551M9.612 7.959a1.653 1.653 0 1 1-3.306 0 1.653 1.653 0 0 1 3.306 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ImageCheckIcon);
module.exports = ForwardRef;