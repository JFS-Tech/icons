const React = require("react");
function KeyboardIcon({
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
    d: "M6.6 10.2h.028m3.572 0h.028m7.144 0h.028m-3.6 0h.028M8.4 13.8h.028m3.572 0h.028m3.572 0h.028M4.8 18h14.4a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 19.2 6H4.8a2.4 2.4 0 0 0-2.4 2.4v7.2A2.4 2.4 0 0 0 4.8 18"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(KeyboardIcon);
module.exports = ForwardRef;