const React = require("react");
function Logout01Icon({
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
    d: "M15.22 20.4h3.706c.561 0 1.1-.221 1.497-.615s.62-.928.62-1.485V5.7c0-.557-.223-1.091-.62-1.485a2.13 2.13 0 0 0-1.497-.615H15.22m-.263 8.4h-12m0 0 4.585 4.8M2.957 12l4.585-4.8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Logout01Icon);
module.exports = ForwardRef;