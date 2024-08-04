const React = require("react");
function ServerUpIcon({
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
    d: "M17.4 16.8h-6m-4.8.09v-.09m3-11.957L12.054 2.4m0 0L14.4 4.732M12.054 2.4v6M16.8 12H7.2a4.8 4.8 0 1 0 0 9.6h9.6a4.8 4.8 0 0 0 0-9.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ServerUpIcon);
module.exports = ForwardRef;