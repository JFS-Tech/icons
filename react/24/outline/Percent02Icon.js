const React = require("react");
function Percent02Icon({
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
    d: "M21 12.063H3m10.278 4.76a1.835 1.835 0 0 1 0 2.632 1.925 1.925 0 0 1-2.684 0 1.835 1.835 0 0 1 0-2.631 1.925 1.925 0 0 1 2.684 0Zm0-12.278a1.835 1.835 0 0 1 0 2.631 1.925 1.925 0 0 1-2.684 0 1.835 1.835 0 0 1 0-2.631 1.925 1.925 0 0 1 2.684 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Percent02Icon);
module.exports = ForwardRef;