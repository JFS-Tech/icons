const React = require("react");
function UserProfile01Icon({
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
    d: "M20.4 21.6V18a3.6 3.6 0 0 0-3.6-3.6H7.2A3.6 3.6 0 0 0 3.6 18v3.6M15.6 6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserProfile01Icon);
module.exports = ForwardRef;