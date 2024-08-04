const React = require("react");
function BracketsPlusIcon({
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
    d: "M7.089 20.238h-.507a2.535 2.535 0 0 1-2.535-2.535v-5.07c0-.78-1.647-1.14-1.647-1.14s1.647-.3 1.647-1.14V6.296c0-1.4 1.135-2.535 2.535-2.535h.507m9.822 0h.507c1.4 0 2.534 1.135 2.534 2.535v5.07c0 .78 1.648 1.14 1.648 1.14s-1.648.3-1.648 1.14v4.056c0 1.4-1.134 2.535-2.534 2.535h-.507M9.6 12.162h4.8m-2.4 2.4v-4.8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BracketsPlusIcon);
module.exports = ForwardRef;