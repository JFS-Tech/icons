const React = require("react");
function ImageIndentRightIcon({
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
    d: "M21.6 19.2H2.4m8.4-5.2H2.4m8.4-5.2H2.4m19.2-5.2H2.4m18 4.8h-3.6a1.2 1.2 0 0 0-1.2 1.2v3.6a1.2 1.2 0 0 0 1.2 1.2h3.6a1.2 1.2 0 0 0 1.2-1.2V9.6a1.2 1.2 0 0 0-1.2-1.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ImageIndentRightIcon);
module.exports = ForwardRef;