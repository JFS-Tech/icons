const React = require("react");
function GearIcon({
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
    strokeLinejoin: "round",
    d: "m21 7-9-5-9 5v10l9 5 9-5zm-9 8.333c1.913 0 3.464-1.492 3.464-3.333 0-1.84-1.55-3.333-3.464-3.333S8.536 10.159 8.536 12s1.55 3.333 3.464 3.333Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GearIcon);
module.exports = ForwardRef;