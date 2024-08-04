const React = require("react");
function Volume01Icon({
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
    d: "m21 21-3.375-3L21 15.001 17.625 12 21 9l-3.375-3L21 3m-8.984 2.929-4.375 3.58H3v5.153l4.64-.002 4.376 3.58z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Volume01Icon);
module.exports = ForwardRef;