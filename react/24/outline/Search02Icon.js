const React = require("react");
function Search02Icon({
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
    d: "M16.927 17.04 20.4 20.4m-9-13.2a3.6 3.6 0 0 1 3.6 3.6m4.28.64a7.84 7.84 0 1 1-15.68 0 7.84 7.84 0 0 1 15.68 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Search02Icon);
module.exports = ForwardRef;