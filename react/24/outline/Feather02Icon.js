const React = require("react");
function Feather02Icon({
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
    d: "M5.175 19.128 15.358 8.946m-1.697 8 5.09-5.091a4.457 4.457 0 1 0-6.303-6.303l-5.09 5.09v6.304z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Feather02Icon);
module.exports = ForwardRef;