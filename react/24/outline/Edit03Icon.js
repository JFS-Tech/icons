const React = require("react");
function Edit03Icon({
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
    d: "M13.8 19.551h6m-15.6 0 4.366-.88a1.2 1.2 0 0 0 .612-.327l9.773-9.78a1.2 1.2 0 0 0 0-1.697L16.88 4.8a1.2 1.2 0 0 0-1.698 0L5.41 14.581a1.2 1.2 0 0 0-.328.61z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Edit03Icon);
module.exports = ForwardRef;