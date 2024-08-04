const React = require("react");
function Header01Icon({
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
    d: "M5.631 20.216v-8.308m0 8.308h-2.77m2.77 0h2.77m-2.77-8.308V3.6m0 8.308h12.462M5.63 3.6h-2.77m2.77 0h2.77m9.692 8.308v8.308m0-8.308V3.6m0 16.616h-2.77m2.77 0h2.769M18.092 3.6h-2.769m2.77 0h2.769"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Header01Icon);
module.exports = ForwardRef;