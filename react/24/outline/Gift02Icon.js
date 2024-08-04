const React = require("react");
function Gift02Icon({
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
    d: "M2.4 14.096V8.828a2.4 2.4 0 0 1 2.4-2.4h14.4a2.4 2.4 0 0 1 2.4 2.4v5.268m-19.2 0h19.2m-19.2 0v5.532a2.4 2.4 0 0 0 2.4 2.4h14.4a2.4 2.4 0 0 0 2.4-2.4v-5.532m-9.425 7.932v-15.6m-1.21-.505a.53.53 0 0 0 .434-.257.53.53 0 0 0 .005-.505c-.319-.58-1.437-2.512-2.166-2.933a1.905 1.905 0 0 0-2.6.69 1.905 1.905 0 0 0 .703 2.595c.742.428 2.961.424 3.623.41m1.67-.762a.53.53 0 0 0 .004.505c.09.155.256.249.436.256.662.015 2.893.012 3.623-.41a1.905 1.905 0 0 0 .702-2.595 1.905 1.905 0 0 0-2.599-.69c-.742.429-1.848 2.353-2.166 2.934"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Gift02Icon);
module.exports = ForwardRef;