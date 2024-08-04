const React = require("react");
function GitBranch05Icon({
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
    d: "M6.667 8.342a2.67 2.67 0 0 0 2.666-2.67A2.67 2.67 0 0 0 6.667 3 2.67 2.67 0 0 0 4 5.671a2.67 2.67 0 0 0 2.667 2.671m0 0v11.725m10.666-5.342A2.67 2.67 0 0 1 20 17.395a2.67 2.67 0 0 1-2.667 2.672 2.67 2.67 0 0 1-2.666-2.671 2.67 2.67 0 0 1 2.666-2.671m0 0V8.378a2.667 2.667 0 0 0-2.666-2.667h-1.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GitBranch05Icon);
module.exports = ForwardRef;