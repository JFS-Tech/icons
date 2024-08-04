const React = require("react");
function ArrowLeftContained01Icon({
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
    d: "M12.296 16.417a1 1 0 1 0 1.536-1.28zM9.749 11.8l-.768-.64a1 1 0 0 0 0 1.28zm4.083-3.338a1 1 0 0 0-1.536-1.28zm0 6.675-3.314-3.978-1.537 1.28 3.315 3.978zm-3.314-2.697 3.314-3.978-1.536-1.28-3.315 3.977zM12 4a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10zm8 8a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowLeftContained01Icon);
module.exports = ForwardRef;