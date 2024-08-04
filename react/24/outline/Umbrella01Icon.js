const React = require("react");
function Umbrella01Icon({
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
    d: "M11.2 13.2v5.2a2.8 2.8 0 1 0 5.6 0V18m4.8-5.6H2.4a9.6 9.6 0 0 1 19.2 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Umbrella01Icon);
module.exports = ForwardRef;