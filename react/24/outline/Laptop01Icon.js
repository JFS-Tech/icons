const React = require("react");
function Laptop01Icon({
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
    d: "M20.4 15.6V6.231c0-1.122-.94-2.03-2.1-2.03H5.7c-1.16 0-2.1.908-2.1 2.03v9.37m16.8 0a1.2 1.2 0 0 1 1.2 1.2v1.8a1.2 1.2 0 0 1-1.2 1.2H3.6a1.2 1.2 0 0 1-1.2-1.2v-1.8a1.2 1.2 0 0 1 1.2-1.2m16.8 0h-4.2l-1.8 1.2H9.9l-2.1-1.2H3.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Laptop01Icon);
module.exports = ForwardRef;