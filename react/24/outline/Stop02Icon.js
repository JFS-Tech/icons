const React = require("react");
function Stop02Icon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.625 3H6.375A3.375 3.375 0 0 0 3 6.375v11.25A3.375 3.375 0 0 0 6.375 21h11.25A3.375 3.375 0 0 0 21 17.625V6.375A3.375 3.375 0 0 0 17.625 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.625 9.89c0-.698.567-1.265 1.266-1.265h4.218c.7 0 1.266.567 1.266 1.266v4.218c0 .7-.567 1.266-1.266 1.266H9.891a1.266 1.266 0 0 1-1.266-1.266z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Stop02Icon);
module.exports = ForwardRef;