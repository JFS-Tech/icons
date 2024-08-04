const React = require("react");
function FlipRightIcon({
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
    d: "M17.046 4.8 21.6 9.416m0 0-4.554 4.615M21.6 9.416H6.4a4 4 0 0 0-4 4V15.2a4 4 0 0 0 4 4H12"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FlipRightIcon);
module.exports = ForwardRef;