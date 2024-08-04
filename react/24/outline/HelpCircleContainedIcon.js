const React = require("react");
function HelpCircleContainedIcon({
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
    d: "M11.999 16.5v.04M9.75 9.23c0-1.266 1.007-2.293 2.25-2.293s2.25 1.027 2.25 2.293-1.007 2.293-2.25 2.293l-.001 1.528M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(HelpCircleContainedIcon);
module.exports = ForwardRef;