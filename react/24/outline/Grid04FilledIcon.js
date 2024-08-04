const React = require("react");
function Grid04FilledIcon({
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
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.4 3.6a1.2 1.2 0 0 1 1.2-1.2H6a1.2 1.2 0 0 1 1.2 1.2V6A1.2 1.2 0 0 1 6 7.2H3.6A1.2 1.2 0 0 1 2.4 6zM9.6 3.6a1.2 1.2 0 0 1 1.2-1.2h2.4a1.2 1.2 0 0 1 1.2 1.2V6a1.2 1.2 0 0 1-1.2 1.2h-2.4A1.2 1.2 0 0 1 9.6 6zM16.8 3.6A1.2 1.2 0 0 1 18 2.4h2.4a1.2 1.2 0 0 1 1.2 1.2V6a1.2 1.2 0 0 1-1.2 1.2H18A1.2 1.2 0 0 1 16.8 6zM2.4 10.8a1.2 1.2 0 0 1 1.2-1.2H6a1.2 1.2 0 0 1 1.2 1.2v2.4A1.2 1.2 0 0 1 6 14.4H3.6a1.2 1.2 0 0 1-1.2-1.2zM9.6 10.8a1.2 1.2 0 0 1 1.2-1.2h2.4a1.2 1.2 0 0 1 1.2 1.2v2.4a1.2 1.2 0 0 1-1.2 1.2h-2.4a1.2 1.2 0 0 1-1.2-1.2zM16.8 10.8A1.2 1.2 0 0 1 18 9.6h2.4a1.2 1.2 0 0 1 1.2 1.2v2.4a1.2 1.2 0 0 1-1.2 1.2H18a1.2 1.2 0 0 1-1.2-1.2zM2.4 18a1.2 1.2 0 0 1 1.2-1.2H6A1.2 1.2 0 0 1 7.2 18v2.4A1.2 1.2 0 0 1 6 21.6H3.6a1.2 1.2 0 0 1-1.2-1.2zM9.6 18a1.2 1.2 0 0 1 1.2-1.2h2.4a1.2 1.2 0 0 1 1.2 1.2v2.4a1.2 1.2 0 0 1-1.2 1.2h-2.4a1.2 1.2 0 0 1-1.2-1.2zM16.8 18a1.2 1.2 0 0 1 1.2-1.2h2.4a1.2 1.2 0 0 1 1.2 1.2v2.4a1.2 1.2 0 0 1-1.2 1.2H18a1.2 1.2 0 0 1-1.2-1.2z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Grid04FilledIcon);
module.exports = ForwardRef;