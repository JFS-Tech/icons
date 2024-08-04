const React = require("react");
function Colors01Icon({
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
    d: "M5.2 9.443a6.4 6.4 0 1 0 9.15 4.957m-1.95 6.092A6.4 6.4 0 1 0 18.232 9.2m.168-.4a6.4 6.4 0 1 1-12.8 0 6.4 6.4 0 0 1 12.8 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Colors01Icon);
module.exports = ForwardRef;