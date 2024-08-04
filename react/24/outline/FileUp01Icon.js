const React = require("react");
function FileUp01Icon({
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
    d: "M10.8 21.6H6a2.4 2.4 0 0 1-2.4-2.4V4.8A2.4 2.4 0 0 1 6 2.4h10.8a2.4 2.4 0 0 1 2.4 2.4v6.6m-3.6 6.643 2.455-2.443m0 0 2.345 2.332M18.055 15.6v6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileUp01Icon);
module.exports = ForwardRef;