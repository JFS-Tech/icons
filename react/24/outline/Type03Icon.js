const React = require("react");
function Type03Icon({
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
    d: "M10.209 16.2h1.915m0 0h2.004m-2.004 0V7.8m0 0H9a.6.6 0 0 0-.6.6v.882M12.124 7.8H15a.6.6 0 0 1 .6.6v1.13M4.8 21.6h14.4a2.4 2.4 0 0 0 2.4-2.4V4.8a2.4 2.4 0 0 0-2.4-2.4H4.8a2.4 2.4 0 0 0-2.4 2.4v14.4a2.4 2.4 0 0 0 2.4 2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Type03Icon);
module.exports = ForwardRef;