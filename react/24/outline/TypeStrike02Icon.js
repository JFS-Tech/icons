const React = require("react");
function TypeStrike02Icon({
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
    d: "M4 12h10.709m0 0c2.503 0 4.533 2.015 4.533 4.5s-2.03 4.5-4.534 4.5h-2.774c-2.742 0-5.029-1.932-5.554-4.5M14.71 12H21m-1.759-3.375C19.241 5.518 16.704 3 13.575 3H10.8C8.296 3 6.267 5.015 6.267 7.5v1.125"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TypeStrike02Icon);
module.exports = ForwardRef;