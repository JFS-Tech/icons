const React = require("react");
function LayoutGrid01Icon({
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
    d: "M12 3v18m-9.6-9H21M2.4 6v12A3.6 3.6 0 0 0 6 21.6h12a3.6 3.6 0 0 0 3.6-3.6V6A3.6 3.6 0 0 0 18 2.4H6A3.6 3.6 0 0 0 2.4 6Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LayoutGrid01Icon);
module.exports = ForwardRef;