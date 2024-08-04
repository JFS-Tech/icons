const React = require("react");
function CurrencyDollarIcon({
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
    d: "M16.778 7.556a3.33 3.33 0 0 0-3-2.223H9.333a3.333 3.333 0 0 0 0 6.667h4.445a3.333 3.333 0 0 1 0 6.667H9.333a3.33 3.33 0 0 1-3-2.223M11.556 2v3.333m0 13.334V22"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CurrencyDollarIcon);
module.exports = ForwardRef;