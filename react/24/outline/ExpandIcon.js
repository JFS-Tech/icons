const React = require("react");
function ExpandIcon({
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
    d: "M9 3H5a2 2 0 0 0-2 2v4m6 12H5a2 2 0 0 1-2-2v-4M15 3h4a2 2 0 0 1 2 2v4m0 6v4a2 2 0 0 1-2 2h-4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ExpandIcon);
module.exports = ForwardRef;