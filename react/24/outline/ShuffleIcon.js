const React = require("react");
function ShuffleIcon({
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
    d: "M3 18.333h2.795c1.09 0 2.113-.527 2.746-1.414l.96-1.343m10.801-9.104h-2.794c-1.09 0-2.113.526-2.747 1.413l-1.073 1.503M18.654 4 21 6.472l-2.346 2.472m0 6.972L21 18.389l-2.346 2.472M3 6.853h2.795c1.09 0 2.113.527 2.746 1.414l6.22 8.708a3.38 3.38 0 0 0 2.747 1.413h2.794"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ShuffleIcon);
module.exports = ForwardRef;