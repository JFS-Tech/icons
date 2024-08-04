const React = require("react");
function Book01Icon({
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
    d: "M12.139 20.487c1.391-1.02 5.231-2.449 9.46 0V5.183M2.4 4.904v15.583c1.392-1.02 5.232-2.449 9.462 0V5.46M2.4 4.865c1.391-1.02 5.231-2.449 9.46 0m.279 0c1.391-1.02 5.231-2.449 9.46 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Book01Icon);
module.exports = ForwardRef;