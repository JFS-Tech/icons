const React = require("react");
function LineHeightIcon({
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
    d: "M3 8.388 6.388 5m0 0 3.388 3.388M6.388 5v15.812M3 17.423l3.388 3.389m0 0 3.388-3.389M14.294 6.13H22.2m-7.906 9.036H22.2m-7.906 4.517H22.2m-7.906-9.035H22.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LineHeightIcon);
module.exports = ForwardRef;