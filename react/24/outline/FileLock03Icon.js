const React = require("react");
function FileLock03Icon({
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
    d: "M10.2 10.2V9a1.8 1.8 0 1 1 3.6 0v1.8M4.2 18V6a3.6 3.6 0 0 1 3.6-3.6h8.4A3.6 3.6 0 0 1 19.8 6v12a3.6 3.6 0 0 1-3.6 3.6H7.8A3.6 3.6 0 0 1 4.2 18m5.4-1.2h4.8a1.2 1.2 0 0 0 1.2-1.2V12a1.2 1.2 0 0 0-1.2-1.2H9.6A1.2 1.2 0 0 0 8.4 12v3.6a1.2 1.2 0 0 0 1.2 1.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileLock03Icon);
module.exports = ForwardRef;