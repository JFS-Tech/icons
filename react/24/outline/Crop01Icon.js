const React = require("react");
function Crop01Icon({
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
    d: "M2.4 6.608H6.87m0-4.208v13.15c0 .582.471 1.053 1.052 1.053H21.6m-3.945 5.26v-4.997m-.263-3.42V7.66c0-.58-.471-1.052-1.052-1.052h-5.524"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Crop01Icon);
module.exports = ForwardRef;