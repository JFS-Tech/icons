const React = require("react");
function SpaceHeightIcon({
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
    d: "M21.6 21.6H2.4M21.6 2.4H2.4m12 13.17L12 18m0 0-2.4-2.43M12 18V6M9.6 8.43 12 6m0 0 2.4 2.43"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SpaceHeightIcon);
module.exports = ForwardRef;