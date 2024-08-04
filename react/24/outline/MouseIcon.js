const React = require("react");
function MouseIcon({
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
    d: "M12 7.8v2.4m0-7.8a6.13 6.13 0 0 0-4.243 1.687A5.65 5.65 0 0 0 6 8.16v7.68c0 1.527.632 2.993 1.757 4.073A6.13 6.13 0 0 0 12 21.6a6.13 6.13 0 0 0 4.243-1.687A5.65 5.65 0 0 0 18 15.84V8.16a5.65 5.65 0 0 0-1.757-4.073A6.13 6.13 0 0 0 12 2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MouseIcon);
module.exports = ForwardRef;