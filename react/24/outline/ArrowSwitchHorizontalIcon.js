const React = require("react");
function ArrowSwitchHorizontalIcon({
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
    d: "M14.25 6.375 17.625 3m0 0L21 6.375M17.625 3v18M9.75 17.625 6.375 21m0 0L3 17.625M6.375 21V3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowSwitchHorizontalIcon);
module.exports = ForwardRef;