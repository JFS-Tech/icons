const React = require("react");
function CurrencyCentIcon({
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
    d: "M17 7.54A5.97 5.97 0 0 0 12.992 6m0 0A5.996 5.996 0 0 0 7 12c0 3.314 2.682 6 5.992 6m0-12 .001-2m-.001 14a5.97 5.97 0 0 0 4.004-1.536M12.992 18l.001 2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CurrencyCentIcon);
module.exports = ForwardRef;