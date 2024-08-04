const React = require("react");
function SortVertical02Icon({
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
    d: "M13.442 6.627H22m-8.558 4.815h6.113m-6.113 4.815h3.667M5.806 6v12m0 0L2 14.332M5.806 18l3.95-3.668"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SortVertical02Icon);
module.exports = ForwardRef;