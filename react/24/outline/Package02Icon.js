const React = require("react");
function Package02Icon({
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
    d: "M12 16.095V12.6m0 0-4.2-2.4m4.2 2.4 4.2-2.4M12 2.4l8.314 4.8v9.6L12 21.6l-8.314-4.8V7.2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Package02Icon);
module.exports = ForwardRef;