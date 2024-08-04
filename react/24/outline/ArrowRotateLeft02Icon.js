const React = require("react");
function ArrowRotateLeft02Icon({
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
    d: "M4.871 14.5C5.89 17.694 8.805 20 12.242 20 16.527 20 20 16.418 20 12s-3.473-8-7.758-8c-2.871 0-5.378 1.609-6.72 4m-.65-.782L5.94 8.25M7.879 9H4V5z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowRotateLeft02Icon);
module.exports = ForwardRef;