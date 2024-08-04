const React = require("react");
function SunDownIcon({
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
    d: "M2.4 21.067h19.2M2.4 17.333h2.667M4.533 10.4l1.886 1.886M18.686 10.4 16.8 12.286m2.133 5.047H21.6m-13.333 0a3.733 3.733 0 0 1 7.466 0m-3.732-14.4V10.4m0 0 3.2-3.2M12 10.4 8.8 7.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SunDownIcon);
module.exports = ForwardRef;