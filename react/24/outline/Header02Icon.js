const React = require("react");
function Header02Icon({
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
    d: "M8.261 16.8v-4.985m0 4.985H6.6m1.661 0h1.662M8.26 11.815V6.83m0 4.985h7.477M8.261 6.83H6.6m1.661 0h1.662m5.815 4.985V16.8m0-4.985V6.83m0 9.97h-1.661m1.661 0H17.4m-1.662-9.97h-1.661m1.661 0H17.4M4.8 21.6h14.4a2.4 2.4 0 0 0 2.4-2.4V4.8a2.4 2.4 0 0 0-2.4-2.4H4.8a2.4 2.4 0 0 0-2.4 2.4v14.4a2.4 2.4 0 0 0 2.4 2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Header02Icon);
module.exports = ForwardRef;