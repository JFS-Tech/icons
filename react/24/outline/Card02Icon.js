const React = require("react");
function Card02Icon({
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
    d: "M3 9.3h18M6.6 13.5h3M4.8 5.1h14.4a2.4 2.4 0 0 1 2.4 2.4V16.5a2.4 2.4 0 0 1-2.4 2.4L4.8 18.9a2.4 2.4 0 0 1-2.4-2.4v-9a2.4 2.4 0 0 1 2.4-2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Card02Icon);
module.exports = ForwardRef;