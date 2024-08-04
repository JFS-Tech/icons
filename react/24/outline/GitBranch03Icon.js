const React = require("react");
function GitBranch03Icon({
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
    d: "M8.714 12H2.4m19.2-.177h-6.912m.006.177a2.734 2.734 0 1 1-5.468 0 2.734 2.734 0 0 1 5.468 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GitBranch03Icon);
module.exports = ForwardRef;