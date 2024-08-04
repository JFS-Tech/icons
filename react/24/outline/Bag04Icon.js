const React = require("react");
function Bag04Icon({
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
    d: "M15.6 8.4v-3a3.6 3.6 0 0 0-7.2 0v3M4.727 22.2h14.546c1.285 0 2.327-1.023 2.327-2.284L20.109 7.8c0-1.262-1.042-2.284-2.327-2.284H5.927C4.642 5.516 3.6 6.538 3.6 7.8L2.4 19.916c0 1.261 1.042 2.284 2.327 2.284"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Bag04Icon);
module.exports = ForwardRef;