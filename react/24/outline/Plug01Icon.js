const React = require("react");
function Plug01Icon({
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
    d: "M11.981 17.627V21.7M8.491 4.245V2.5m6.981 1.745V2.5m3.49 5.818H5m1.746 0h10.473v4.655a4.655 4.655 0 0 1-4.655 4.654h-1.164a4.655 4.655 0 0 1-4.654-4.654z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Plug01Icon);
module.exports = ForwardRef;