const React = require("react");
function ImageIndentLeftIcon({
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
    d: "M2.4 3.6h19.2m-8.4 5.2h8.4M13.2 14h8.4M2.4 19.2h19.2m-18-4.8h3.6a1.2 1.2 0 0 0 1.2-1.2V9.6a1.2 1.2 0 0 0-1.2-1.2H3.6a1.2 1.2 0 0 0-1.2 1.2v3.6a1.2 1.2 0 0 0 1.2 1.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ImageIndentLeftIcon);
module.exports = ForwardRef;