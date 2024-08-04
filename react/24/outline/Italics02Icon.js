const React = require("react");
function Italics02Icon({
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
    d: "m10.314 16.8 2.773-9.6m-2.774 9.6H7.429m2.885 0H13.2m-.112-9.6H10.2m2.886 0h2.886M4.8 21.6h14.4a2.4 2.4 0 0 0 2.4-2.4V4.8a2.4 2.4 0 0 0-2.4-2.4H4.8a2.4 2.4 0 0 0-2.4 2.4v14.4a2.4 2.4 0 0 0 2.4 2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Italics02Icon);
module.exports = ForwardRef;