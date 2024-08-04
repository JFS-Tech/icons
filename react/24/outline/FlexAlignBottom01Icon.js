const React = require("react");
function FlexAlignBottom01Icon({
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
    d: "M7.5 16.5h9m-9-3.375h9m4.5 4.5V6.375A3.375 3.375 0 0 0 17.625 3H6.375A3.375 3.375 0 0 0 3 6.375v11.25A3.375 3.375 0 0 0 6.375 21h11.25A3.375 3.375 0 0 0 21 17.625"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FlexAlignBottom01Icon);
module.exports = ForwardRef;