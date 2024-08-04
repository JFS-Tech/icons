const React = require("react");
function Moon02Icon({
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
    d: "M18.9 11.7v-3m0 0v-3m0 3h3m-3 0h-3m-1.8-3V3.9m0 0V2.1m0 1.8h1.8m-1.8 0h-1.8m9 11.04c-.902.273-1.86.42-2.851.42-5.418 0-9.81-4.392-9.81-9.81 0-.99.147-1.948.42-2.85C5.032 3.922 2.1 7.663 2.1 12.09c0 5.418 4.392 9.81 9.81 9.81 4.427 0 8.169-2.932 9.39-6.96"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Moon02Icon);
module.exports = ForwardRef;