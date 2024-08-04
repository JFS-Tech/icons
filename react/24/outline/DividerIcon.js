const React = require("react");
function DividerIcon({
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
    d: "M3 21v-2.919c0-1.075.883-1.946 1.973-1.946h14.054c1.09 0 1.973.871 1.973 1.946V21M3 3v2.919c0 1.075.883 1.946 1.973 1.946h14.054c1.09 0 1.973-.871 1.973-1.946V3M3 12h.06m4.365 0h.06m4.485 0h.06m4.425 0h.06m4.425 0H21"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DividerIcon);
module.exports = ForwardRef;