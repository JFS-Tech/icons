const React = require("react");
function FileShield02Icon({
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
    d: "M10.2 21.6H7.8A3.6 3.6 0 0 1 4.2 18V6a3.6 3.6 0 0 1 3.6-3.6h8.4A3.6 3.6 0 0 1 19.8 6v3m-4.2-1.8H7.8m4.2 3.6H7.8m2.4 3.6H7.8m6 .3 1.39-.695a3.6 3.6 0 0 1 3.22 0l1.39.695v3.345c0 1.155-1.068 1.935-3 3.155-1.932-1.22-3-2.25-3-3.155z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileShield02Icon);
module.exports = ForwardRef;