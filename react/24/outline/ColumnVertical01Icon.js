const React = require("react");
function ColumnVertical01Icon({
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
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 3c1.105 0 2 .883 2 1.973v14.054c0 1.09-.895 1.973-2 1.973h-3c-1.105 0-2-.883-2-1.973V4.973C14 3.883 14.895 3 16 3zM5 3c-1.105 0-2 .883-2 1.973v14.054C3 20.117 3.895 21 5 21h3c1.105 0 2-.883 2-1.973V4.973C10 3.883 9.105 3 8 3z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ColumnVertical01Icon);
module.exports = ForwardRef;