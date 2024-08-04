const React = require("react");
function Type01Icon({
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
    d: "M2.4 20.47h3.388m7.906 0H21.6M5.675 14.824h7.793M9.402 4.998l6.55 15.473m-12.423 0L10.306 2.4h2.259l7.906 18.07"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Type01Icon);
module.exports = ForwardRef;