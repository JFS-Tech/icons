const React = require("react");
function AddSquare02Icon({
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
    d: "M15.375 12H12m0 0H8.625M12 12v3.374M12 12V8.625M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    opacity: 0.9
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AddSquare02Icon);
module.exports = ForwardRef;