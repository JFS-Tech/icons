const React = require("react");
function InformationCircleContainedIcon({
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
    d: "M12 12v4.5m0-7.835v-.04M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(InformationCircleContainedIcon);
module.exports = ForwardRef;