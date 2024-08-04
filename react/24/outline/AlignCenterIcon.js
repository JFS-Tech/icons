const React = require("react");
function AlignCenterIcon({
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
    d: "M21.6 19.8H2.4m17.4-5.2H5.676M21.6 9.4H2.4m15-4.6H7.138"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AlignCenterIcon);
module.exports = ForwardRef;