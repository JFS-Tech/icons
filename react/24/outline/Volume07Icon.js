const React = require("react");
function Volume07Icon({
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
    d: "M16.883 8.5V4l-4.651 4.651H5.5v6.697h4.046M16.883 13v7L13 16.117M6 18.5l3.546-3.152M19.5 6.5l-9.954 8.848"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Volume07Icon);
module.exports = ForwardRef;