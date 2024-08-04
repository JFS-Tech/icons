const React = require("react");
function Temperature04Icon({
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
    d: "M12 17.4h.056m4.144 0a4.2 4.2 0 1 1-6.6-3.447V4.798a2.4 2.4 0 0 1 4.8.002v9.153c.86.769 1.8 2.203 1.8 3.447"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Temperature04Icon);
module.exports = ForwardRef;