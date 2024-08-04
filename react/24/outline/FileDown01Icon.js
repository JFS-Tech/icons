const React = require("react");
function FileDown01Icon({
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
    d: "M10.8 21.6H6a2.4 2.4 0 0 1-2.4-2.4V4.8A2.4 2.4 0 0 1 6 2.4h10.8a2.4 2.4 0 0 1 2.4 2.4v6.6m1.2 7.757L17.946 21.6m0 0L15.6 19.268m2.346 2.332v-6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileDown01Icon);
module.exports = ForwardRef;