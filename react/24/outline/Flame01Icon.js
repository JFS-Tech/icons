const React = require("react");
function Flame01Icon({
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
    strokeLinejoin: "round",
    d: "M12 21.6c-3.97 0-7.2-3.042-7.2-6.781 0-5.22 7.2-12.42 7.2-12.42s7.2 7.2 7.2 12.42c0 3.739-3.23 6.78-7.2 6.78Zm0 0c-1.985 0-3.6-1.521-3.6-3.39C8.4 15.6 12 12 12 12s3.6 3.6 3.6 6.21c0 1.869-1.615 3.39-3.6 3.39Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Flame01Icon);
module.exports = ForwardRef;