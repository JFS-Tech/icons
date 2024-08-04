const React = require("react");
function Umbrella02Icon({
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
    d: "M12 2.8a9.6 9.6 0 0 1 9.6 9.6H2.4A9.6 9.6 0 0 1 12 2.8m0 0C8.4 7 8.533 10 8 12.4m4-9.6c3 4.2 3.467 7.2 4 9.6m-4.8.8v5.2a2.8 2.8 0 1 0 5.6 0V18"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Umbrella02Icon);
module.exports = ForwardRef;