const React = require("react");
function ListIcon({
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
    d: "M8.72 6H21.6M8.72 12.48H21.6M8.72 18.96H21.6M3.6 6v.013m0 6.467v.013m0 6.467v.013"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ListIcon);
module.exports = ForwardRef;