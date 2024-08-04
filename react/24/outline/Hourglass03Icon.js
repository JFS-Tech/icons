const React = require("react");
function Hourglass03Icon({
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
    d: "M5.25 3h14m-14 18h14M17.5 3v2.647a3 3 0 0 1-.674 1.895l-2.875 3.53a1.64 1.64 0 0 0 .03 2.12l2.794 3.25a3 3 0 0 1 .725 1.956V21M7 3v2.647a3 3 0 0 0 .674 1.895l2.875 3.53a1.64 1.64 0 0 1-.03 2.12l-2.794 3.25A3 3 0 0 0 7 18.398V21"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Hourglass03Icon);
module.exports = ForwardRef;