const React = require("react");
function Scissors04Icon({
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
    d: "M8.58 8.58 21.6 19.2m0-14.4L8.58 15.42M6 9.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2m0 12a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Scissors04Icon);
module.exports = ForwardRef;