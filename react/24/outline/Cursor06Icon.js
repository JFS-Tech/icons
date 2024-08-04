const React = require("react");
function Cursor06Icon({
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
    d: "M9.6 19.633H4.57a2.16 2.16 0 0 1-2.17-2.154V4.554c0-1.19.971-2.154 2.17-2.154h13.02c1.199 0 2.17.964 2.17 2.154V8.4m-2.41 7.577 3.714-1.257a.773.773 0 0 0 .036-1.458l-9.207-3.604c-.641-.251-1.282.36-1.042.993l3.508 9.242c.256.675 1.232.676 1.49.002z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Cursor06Icon);
module.exports = ForwardRef;