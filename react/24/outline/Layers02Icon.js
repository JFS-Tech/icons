const React = require("react");
function Layers02Icon({
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
    d: "m17.4 12.174 4.2 2.153-9.6 4.92-9.6-4.92 4.277-2.192M12 4.752l9.6 4.92-9.6 4.922-9.6-4.921z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Layers02Icon);
module.exports = ForwardRef;