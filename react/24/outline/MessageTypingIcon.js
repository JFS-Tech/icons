const React = require("react");
function MessageTypingIcon({
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
    d: "M7.5 12.085V12m4.5.085V12m4.499.085V12m4.5 0a9 9 0 0 1-.765 3.636L21 20.999l-4.596-1.149A9 9 0 0 1 3 12a9 9 0 1 1 17.998 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MessageTypingIcon);
module.exports = ForwardRef;