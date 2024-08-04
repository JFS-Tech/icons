const React = require("react");
function CheckContainedIcon({
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
    d: "m15.142 9.983-4.267 4.267-1.455-1.454M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CheckContainedIcon);
module.exports = ForwardRef;