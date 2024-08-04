const React = require("react");
function Microphone02Icon({
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
    d: "M2.493 13.376a9.607 9.607 0 0 0 19.014 0M12 2.4a4.116 4.116 0 0 0-4.116 4.116v5.488a4.116 4.116 0 1 0 8.232 0V6.516A4.116 4.116 0 0 0 12.002 2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Microphone02Icon);
module.exports = ForwardRef;