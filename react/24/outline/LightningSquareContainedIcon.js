const React = require("react");
function LightningSquareContainedIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.375 21A3.375 3.375 0 0 1 3 17.625V6.375A3.375 3.375 0 0 1 6.375 3h11.25A3.375 3.375 0 0 1 21 6.375v11.25A3.375 3.375 0 0 1 17.625 21z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7.5 13.5 5.25-7.125v4.875h3.75l-5.25 6.375V13.5z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LightningSquareContainedIcon);
module.exports = ForwardRef;