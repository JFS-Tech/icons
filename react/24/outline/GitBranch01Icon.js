const React = require("react");
function GitBranch01Icon({
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
    d: "M13.968 18.22a2.361 2.361 0 1 0 4.722 0 2.361 2.361 0 0 0-4.722 0Zm0 0h-3.967a4 4 0 0 1-4-3.999L6 4m7.525 4.777H6m12.69 0a2.36 2.36 0 1 1-4.722 0 2.36 2.36 0 0 1 4.722 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GitBranch01Icon);
module.exports = ForwardRef;