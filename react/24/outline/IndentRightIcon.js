const React = require("react");
function IndentRightIcon({
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
    d: "M21.6 19.2H2.4M12 14H2.4M12 8.8H2.4m19.2-5.2H2.4m19.2 4.8v6l-4.8-3z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(IndentRightIcon);
module.exports = ForwardRef;