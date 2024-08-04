const React = require("react");
function DropIcon({
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
    d: "M15.6 14.4c-.536 1.676-1.882 3.017-3.6 3.6m0 3.6c-3.97 0-7.2-3.042-7.2-6.781 0-5.22 7.2-12.42 7.2-12.42s7.2 7.2 7.2 12.42c0 3.739-3.23 6.78-7.2 6.78"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DropIcon);
module.exports = ForwardRef;