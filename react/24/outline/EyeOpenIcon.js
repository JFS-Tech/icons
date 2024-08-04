const React = require("react");
function EyeOpenIcon({
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
    d: "M14.4 12.03c0 1.29-1.075 2.335-2.4 2.335-1.326 0-2.4-1.046-2.4-2.336s1.074-2.335 2.4-2.335 2.4 1.046 2.4 2.335Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EyeOpenIcon);
module.exports = ForwardRef;