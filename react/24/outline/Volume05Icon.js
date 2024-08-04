const React = require("react");
function Volume05Icon({
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
    d: "M19.682 8.08c1.584 2.514 1.808 5.86.301 8.822m-3.637-7.178c1.337 1.563 1.526 3.642.254 5.483M12 6 7.588 9.488H3v5.023l4.588-.001L12 18z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Volume05Icon);
module.exports = ForwardRef;