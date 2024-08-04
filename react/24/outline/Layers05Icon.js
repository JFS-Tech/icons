const React = require("react");
function Layers05Icon({
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
    d: "m21.6 11.975-9.6 4.92-9.6-4.92m19.2 4.704L12 21.6l-9.6-4.92M12 2.4l9.6 4.92-9.6 4.922L2.4 7.32z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Layers05Icon);
module.exports = ForwardRef;