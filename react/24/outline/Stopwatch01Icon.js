const React = require("react");
function Stopwatch01Icon({
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
    d: "m18.834 4.078 1.17 1.169m1.168 1.169-1.169-1.17M9.224 2h4.935m3.896 5.195 1.948-1.948m-7.232 5.714-1.68 1.68 1.68 1.68-1.68 1.68m9.302-2.572a8.571 8.571 0 1 1-17.143 0 8.571 8.571 0 0 1 17.143 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Stopwatch01Icon);
module.exports = ForwardRef;