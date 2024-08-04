const React = require("react");
function Scissors03Icon({
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
    d: "M4.8 9.395 21.6 16.8m0-9.6L4.8 14.605M6 9.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2m0 12a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Scissors03Icon);
module.exports = ForwardRef;