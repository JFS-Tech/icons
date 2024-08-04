const React = require("react");
function AlarmMinusIcon({
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
    d: "M2.4 7.008V6.24A3.84 3.84 0 0 1 6.24 2.4h.768m9.984 0h.768a3.84 3.84 0 0 1 3.84 3.84v.768M5.856 18.912 3.168 21.6m17.664 0-2.688-2.688M15 12.6H9m11.448.168a8.448 8.448 0 1 1-16.896 0 8.448 8.448 0 0 1 16.896 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AlarmMinusIcon);
module.exports = ForwardRef;