const React = require("react");
function Pencil02Icon({
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
    d: "M12 22.2h9.6M15 4.8l4.2 3.6m-15 7.2L16.03 3.355a3.262 3.262 0 0 1 4.614 4.614L8.4 19.799l-6 1.8z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Pencil02Icon);
module.exports = ForwardRef;