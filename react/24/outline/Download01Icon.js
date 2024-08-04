const React = require("react");
function Download01Icon({
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
    d: "M4 20.383c.405.395.954.617 1.526.617h12.948c.572 0 1.121-.222 1.526-.617M12.001 3v11.943m0 0 4.933-4.564M12 14.943 7.07 10.379"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Download01Icon);
module.exports = ForwardRef;