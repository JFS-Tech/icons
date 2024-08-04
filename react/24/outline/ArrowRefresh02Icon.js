const React = require("react");
function ArrowRefresh02Icon({
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
    d: "M19.422 8.014A8.04 8.04 0 0 0 12.46 4a8.04 8.04 0 0 0-7.455 5.017m11.977 0H21V5.003M5.578 16.042a8.04 8.04 0 0 0 6.963 4.014 8.04 8.04 0 0 0 7.455-5.018m-11.977 0H4v4.014"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowRefresh02Icon);
module.exports = ForwardRef;