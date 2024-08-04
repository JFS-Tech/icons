const React = require("react");
function ReceiptIcon({
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
    d: "M18.24 3H5.76c-.862 0-1.56.806-1.56 1.8V21l2.6-1.8L9.4 21l2.6-1.8 2.6 1.8 2.6-1.8 2.6 1.8V4.8c0-.994-.698-1.8-1.56-1.8Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ReceiptIcon);
module.exports = ForwardRef;