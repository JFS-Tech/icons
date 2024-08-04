const React = require("react");
function Cursor02Icon({
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
    d: "M13.332 13.311 20.4 20.4m-7.46-7.483 5.602-1.843c1.05-.345 1.055-1.831.008-2.269L5.238 3.699a1.167 1.167 0 0 0-1.55 1.515l4.83 13.708c.41 1.059 1.892 1.091 2.264.049z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Cursor02Icon);
module.exports = ForwardRef;