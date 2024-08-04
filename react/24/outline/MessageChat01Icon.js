const React = require("react");
function MessageChat01Icon({
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
    d: "M5 11a8 8 0 1 1 15.319 3.232L21 18.999l-4.085-1.021A7.96 7.96 0 0 1 12.999 19m-9.998-3c0 .719.152 1.402.425 2.02L3 21l2.553-.639A5 5 0 1 0 3.001 16"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MessageChat01Icon);
module.exports = ForwardRef;