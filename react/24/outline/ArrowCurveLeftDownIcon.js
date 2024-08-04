const React = require("react");
function ArrowCurveLeftDownIcon({
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
    d: "M8.914 19.8 3.6 14.486m0 0 5.314-5.314M3.6 14.486h12.8a4 4 0 0 0 4-4V4.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowCurveLeftDownIcon);
module.exports = ForwardRef;