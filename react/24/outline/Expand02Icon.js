const React = require("react");
function Expand02Icon({
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
    d: "m14 10 7-7m0 0h-5.143M21 3v5.143M10 14l-7 7m0 0h5.143M3 21v-5.143M14 14l7 7m0 0v-5.143M21 21h-5.143M10 10 3 3m0 0v5.143M3 3h5.143"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Expand02Icon);
module.exports = ForwardRef;