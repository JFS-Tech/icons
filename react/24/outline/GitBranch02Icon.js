const React = require("react");
function GitBranch02Icon({
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
    d: "M6.504 14.992a2.504 2.504 0 1 1 0 5.008 2.504 2.504 0 0 1 0-5.008Zm0 0V6.504M16.52 9.008a2.504 2.504 0 1 0 0-5.008 2.504 2.504 0 0 0 0 5.008Zm0 0v4.45a4 4 0 0 1-4 4H9.01"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GitBranch02Icon);
module.exports = ForwardRef;