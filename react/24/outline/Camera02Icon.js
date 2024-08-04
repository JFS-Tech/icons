const React = require("react");
function Camera02Icon({
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
    fill: "#000",
    d: "M3.4 18.12V5.88h-2v12.24zM4.8 4.48h14.4v-2H4.8zm15.8 1.4v12.24h2V5.88zm0 12.24a1.4 1.4 0 0 1-1.4 1.4v2a3.4 3.4 0 0 0 3.4-3.4zM19.2 4.48a1.4 1.4 0 0 1 1.4 1.4h2a3.4 3.4 0 0 0-3.4-3.4zM3.4 5.88a1.4 1.4 0 0 1 1.4-1.4v-2a3.4 3.4 0 0 0-3.4 3.4zm1.4 13.64a1.4 1.4 0 0 1-1.4-1.4h-2a3.4 3.4 0 0 0 3.4 3.4zM14.6 12a2.6 2.6 0 0 1-2.6 2.6v2a4.6 4.6 0 0 0 4.6-4.6zM12 14.6A2.6 2.6 0 0 1 9.4 12h-2a4.6 4.6 0 0 0 4.6 4.6zM9.4 12A2.6 2.6 0 0 1 12 9.4v-2A4.6 4.6 0 0 0 7.4 12zM12 9.4a2.6 2.6 0 0 1 2.6 2.6h2A4.6 4.6 0 0 0 12 7.4zm7.2 10.12H4.8v2h14.4z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Camera02Icon);
module.exports = ForwardRef;