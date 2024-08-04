const React = require("react");
function Percent01Icon({
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
    d: "M20 20 4 4.065m4.82 13.398a2.38 2.38 0 0 1-2.386 2.376 2.38 2.38 0 0 1-2.386-2.376 2.38 2.38 0 0 1 2.386-2.376 2.38 2.38 0 0 1 2.385 2.376ZM19.951 6.376a2.38 2.38 0 0 1-2.386 2.376 2.38 2.38 0 0 1-2.385-2.376A2.38 2.38 0 0 1 17.566 4a2.38 2.38 0 0 1 2.386 2.376Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Percent01Icon);
module.exports = ForwardRef;