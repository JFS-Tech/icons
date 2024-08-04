const React = require("react");
function AlertTriangleIcon({
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
    d: "M12 12.9V8.414m0 7.81v.04M17.67 20H6.33a3.4 3.4 0 0 1-3.267-2.424c-.176-.598.04-1.22.37-1.751L9.103 5.6c1.328-2.135 4.466-2.135 5.794 0l5.67 10.224c.33.53.546 1.153.37 1.75A3.4 3.4 0 0 1 17.67 20"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AlertTriangleIcon);
module.exports = ForwardRef;