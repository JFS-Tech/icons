const React = require("react");
function Mail01Icon({
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
    d: "M4.125 6.125 12 11.188l8.438-5.063M5.25 18.305A2.25 2.25 0 0 1 3 16.054V7.25A2.25 2.25 0 0 1 5.25 5h13.5A2.25 2.25 0 0 1 21 7.25v8.804a2.25 2.25 0 0 1-2.25 2.25z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Mail01Icon);
module.exports = ForwardRef;