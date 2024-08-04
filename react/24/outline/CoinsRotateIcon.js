const React = require("react");
function CoinsRotateIcon({
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
    d: "M10.2 7.8a5.4 5.4 0 1 1 5.916 6.561M6.6 6.002 9 3.6 6.6 1.2M1.8 8.4V6.8A3.2 3.2 0 0 1 5 3.6h2.4m10 14.4L15 20.4l2.4 2.4m4.8-7.2v1.6a3.2 3.2 0 0 1-3.2 3.2h-2.4m-4-4.2a5.4 5.4 0 1 1-10.8 0 5.4 5.4 0 0 1 10.8 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CoinsRotateIcon);
module.exports = ForwardRef;