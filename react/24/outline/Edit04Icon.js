const React = require("react");
function Edit04Icon({
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
    strokeLinejoin: "round",
    d: "M15.325 4.907a1 1 0 0 1 1.414 0l2.353 2.35a1 1 0 0 1 0 1.415l-9.957 9.963a1 1 0 0 1-.51.273L4.2 19.8l.893-4.42a1 1 0 0 1 .273-.509z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Edit04Icon);
module.exports = ForwardRef;