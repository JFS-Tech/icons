const React = require("react");
function AnnotationCheckIcon({
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
    d: "m9.75 9.75 1.688 1.688L15.375 7.5m-.93 8.804L12 21l-2.25-4.696h-4.5A2.25 2.25 0 0 1 3 14.054V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v8.804a2.25 2.25 0 0 1-2.25 2.25z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AnnotationCheckIcon);
module.exports = ForwardRef;