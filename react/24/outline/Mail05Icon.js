const React = require("react");
function Mail05Icon({
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
    d: "M3 5.25v13.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V5.25m-18 0A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25m-18 0A2.25 2.25 0 0 0 5.25 7.5h13.5A2.25 2.25 0 0 0 21 5.25m-14.062 9h4.5m-4.5 3.375H9.75"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Mail05Icon);
module.exports = ForwardRef;