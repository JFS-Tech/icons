const React = require("react");
function CardCheckIcon({
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
    d: "M13.8 18.9H4.2a2.4 2.4 0 0 1-2.4-2.4v-9a2.4 2.4 0 0 1 2.4-2.4h14.4A2.4 2.4 0 0 1 21 7.5v4.2m-3.6 4.783 1.508 1.508L22.2 14.7M2.4 9.3h18"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CardCheckIcon);
module.exports = ForwardRef;