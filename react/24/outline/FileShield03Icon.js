const React = require("react");
function FileShield03Icon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.2 6v12a3.6 3.6 0 0 0 3.6 3.6h8.4a3.6 3.6 0 0 0 3.6-3.6V6a3.6 3.6 0 0 0-3.6-3.6H7.8A3.6 3.6 0 0 0 4.2 6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.61 8.605a3.6 3.6 0 0 0-3.22 0L9 9.3v3.345c0 .905 1.068 1.934 3 3.155 1.932-1.22 3-2 3-3.155V9.3z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileShield03Icon);
module.exports = ForwardRef;