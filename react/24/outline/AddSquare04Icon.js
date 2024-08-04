const React = require("react");
function AddSquare04Icon({
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
    fill: "#000",
    d: "M13 7.5a1 1 0 1 0-2 0zm-2 9a1 1 0 1 0 2 0zm5.5-3.5a1 1 0 1 0 0-2zm-9-2a1 1 0 1 0 0 2zM20 12a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10zm-1 3.5V12h2V7.5zm0 4.5v4.5h2V12zm5.5-1H12v2h4.5zM12 11H7.5v2H12z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AddSquare04Icon);
module.exports = ForwardRef;