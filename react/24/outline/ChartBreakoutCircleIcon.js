const React = require("react");
function ChartBreakoutCircleIcon({
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
    d: "M2.967 13.726c4.536 0 10.773.567 11.34-3.402m0 0h-3.402m3.402 0V14.4m-.078-12v2.447m7.37 4.924h-2.446m.179-5.103-1.624 1.62M9.6 2.703C5.46 3.768 2.4 7.527 2.4 12a9.6 9.6 0 0 0 9.6 9.6c4.687 0 8.589-3.358 9.431-7.8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ChartBreakoutCircleIcon);
module.exports = ForwardRef;