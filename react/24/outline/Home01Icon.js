const React = require("react");
function Home01Icon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9.416c0-.37.188-.716.505-.93l7.8-5.275a1.25 1.25 0 0 1 1.39 0l7.8 5.275c.317.214.505.56.505.93v9.872c0 .946-.806 1.712-1.8 1.712H4.8c-.994 0-1.8-.766-1.8-1.712z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.25 13.125a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Home01Icon);
module.exports = ForwardRef;