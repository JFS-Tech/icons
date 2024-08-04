const React = require("react");
function Scissors01Icon({
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
    d: "m8.044 9.244 11.89 9.699m0-13.151L8.044 15.49m9.15-3.123-.02.021m4.426-.021-.022.021m-15.89-2.213a3.288 3.288 0 1 1 0-6.576 3.288 3.288 0 0 1 0 6.576m0 10.959a3.288 3.288 0 1 1 0-6.576 3.288 3.288 0 0 1 0 6.576"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Scissors01Icon);
module.exports = ForwardRef;