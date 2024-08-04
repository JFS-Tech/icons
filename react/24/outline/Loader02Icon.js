const React = require("react");
function Loader02Icon({
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
    d: "M13.35 5.7V2.1m0 19.8v-4.8m5.7-5.7h2.1m-18.3 0h4.8m9.731-4.03 1.67-1.67M5.925 18.825l3.394-3.394m8.062 0 1.67 1.668M5.924 3.975 9.319 7.37"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Loader02Icon);
module.exports = ForwardRef;