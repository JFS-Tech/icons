const React = require("react");
function Underline01Icon({
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
    d: "M20 20H4M17.714 5.143v5.714a5.714 5.714 0 1 1-11.428 0V5.143M4.57 4H8m8 0h3.429"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Underline01Icon);
module.exports = ForwardRef;