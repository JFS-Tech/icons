const React = require("react");
function MediaStrip01Icon({
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
    d: "M3 7.2h18M3 16.8h18M12 2.4v19.2m4.8-19.2v4.8m0 9.6v4.8M7.2 2.4v4.8m0 9.6v4.8M6 2.4h12A3.6 3.6 0 0 1 21.6 6v12a3.6 3.6 0 0 1-3.6 3.6H6A3.6 3.6 0 0 1 2.4 18V6A3.6 3.6 0 0 1 6 2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MediaStrip01Icon);
module.exports = ForwardRef;