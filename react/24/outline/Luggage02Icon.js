const React = require("react");
function Luggage02Icon({
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
    d: "M7.844 18.615V8.092m7.719 10.523V8.092m-7.126-.584V5.169C8.438 4.523 8.97 4 9.626 4h4.156c.656 0 1.188.523 1.188 1.17v2.338M4.875 19.2h14.25c1.312 0 2.375-1.047 2.375-2.338V9.846c0-1.291-1.063-2.338-2.375-2.338H4.875C3.563 7.508 2.5 8.555 2.5 9.846v7.015c0 1.292 1.063 2.339 2.375 2.339Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Luggage02Icon);
module.exports = ForwardRef;