const React = require("react");
function ColorSwatch02Icon({
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
    d: "M17.333 21.6a4.267 4.267 0 0 1-4.266-4.267v-12.8A2.133 2.133 0 0 1 15.2 2.4h4.267A2.133 2.133 0 0 1 21.6 4.533v12.8a4.266 4.266 0 0 1-4.267 4.267m0 0h-12.8A2.134 2.134 0 0 1 2.4 19.467V15.2a2.133 2.133 0 0 1 2.133-2.133h2.454m6.08-6.027-2.134-2.133a2.133 2.133 0 0 0-3.016 0L4.9 7.923a2.133 2.133 0 0 0 0 3.017l9.6 9.6m2.833-3.207v.01"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ColorSwatch02Icon);
module.exports = ForwardRef;