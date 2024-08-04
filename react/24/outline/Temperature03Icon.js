const React = require("react");
function Temperature03Icon({
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
    d: "M8.7 17.4h.056m5.944-6.6.412-.17a2.6 2.6 0 0 1 1.988.001 2.6 2.6 0 0 0 1.988.002l.412-.17m-4.8-3.526.412-.17a2.6 2.6 0 0 1 1.988.002 2.6 2.6 0 0 0 1.988.001l.412-.17m-6.6 10.8a4.2 4.2 0 1 1-6.6-3.447V4.798a2.4 2.4 0 0 1 4.8.002v9.153c.86.769 1.8 2.203 1.8 3.447"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Temperature03Icon);
module.exports = ForwardRef;