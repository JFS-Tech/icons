const React = require("react");
function Book03Icon({
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
    d: "M8.571 2.4v19.2m8.915-10.971h-4.8m4.8-4.115h-4.8m-7.543 0H2.4m2.743 4.115H2.4m2.743 4.114H2.4M6.514 21.6h12.343a2.743 2.743 0 0 0 2.743-2.743V5.143A2.743 2.743 0 0 0 18.857 2.4H6.514a2.743 2.743 0 0 0-2.743 2.743v13.714A2.743 2.743 0 0 0 6.514 21.6Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Book03Icon);
module.exports = ForwardRef;