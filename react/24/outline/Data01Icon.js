const React = require("react");
function Data01Icon({
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
    d: "M6.24 12a1.92 1.92 0 1 1-3.84 0 1.92 1.92 0 0 1 3.84 0Zm0 0h11.52m0 0a1.92 1.92 0 1 0 3.84 0 1.92 1.92 0 0 0-3.84 0Zm0-7.68a1.92 1.92 0 1 0 3.84 0 1.92 1.92 0 0 0-3.84 0Zm0 0h-5.52a.96.96 0 0 0-.96.96v13.44c0 .53.43.96.96.96h5.52m0 0a1.92 1.92 0 1 0 3.84 0 1.92 1.92 0 0 0-3.84 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Data01Icon);
module.exports = ForwardRef;