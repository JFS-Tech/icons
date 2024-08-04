const React = require("react");
function MessageCircleIcon({
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
    d: "M20.234 15.636A9 9 0 0 0 20.998 12 9 9 0 1 0 3 12a9 9 0 0 0 13.404 7.85L21 21z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MessageCircleIcon);
module.exports = ForwardRef;