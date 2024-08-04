const React = require("react");
function CheckBrokenIcon({
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
    d: "M21 12a9 9 0 1 1-9-9c1.412 0 2.748.325 3.938.905m3.374 2.47-7.875 7.875L9.188 12"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CheckBrokenIcon);
module.exports = ForwardRef;