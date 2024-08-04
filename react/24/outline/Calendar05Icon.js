const React = require("react");
function Calendar05Icon({
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
    d: "m14.951 10.938 2.361 2.656m0 0-2.36 2.656m2.36-2.656H7.75m0-6.375h8.854m3.896-.532v10.625a3.19 3.19 0 0 1-3.187 3.188H6.688A3.19 3.19 0 0 1 3.5 17.313V6.688A3.187 3.187 0 0 1 6.688 3.5h10.625A3.19 3.19 0 0 1 20.5 6.688"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Calendar05Icon);
module.exports = ForwardRef;