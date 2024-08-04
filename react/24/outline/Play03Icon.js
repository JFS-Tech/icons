const React = require("react");
function Play03Icon({
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
    d: "M17.973 10.937c1.367.762 1.372 1.72 0 2.58L7.376 20.666c-1.331.71-2.236.29-2.33-1.247L5 4.46c-.03-1.416 1.136-1.817 2.248-1.138z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Play03Icon);
module.exports = ForwardRef;