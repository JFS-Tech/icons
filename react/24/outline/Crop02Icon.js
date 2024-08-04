const React = require("react");
function Crop02Icon({
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
    d: "M2.4 6.608H6.87m0 0V2.4m0 4.208v8.943c0 .58.471 1.052 1.052 1.052h9.732M6.87 6.608l9.732-.061c.58 0 1.052.47 1.052 1.052v9.004m0 0H21.6m-3.945 0v5.26"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Crop02Icon);
module.exports = ForwardRef;