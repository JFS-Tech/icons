const React = require("react");
function ColumnHorizontal01Icon({
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
    d: "M21 19c0 1.105-.883 2-1.973 2H4.973C3.883 21 3 20.105 3 19v-3c0-1.105.883-2 1.973-2h14.054c1.09 0 1.973.895 1.973 2zM21 5c0-1.105-.883-2-1.973-2H4.973C3.883 3 3 3.895 3 5v3c0 1.105.883 2 1.973 2h14.054C20.117 10 21 9.105 21 8z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ColumnHorizontal01Icon);
module.exports = ForwardRef;