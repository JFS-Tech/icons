const React = require("react");
function Volume02Icon({
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
    d: "m21 9.724-2.25 2.193m0 0L16.5 14.11m2.25-2.193L21 14.11m-2.25-2.193L16.5 9.724M12.016 6 7.641 9.489H3v5.022h4.64L12.017 18z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Volume02Icon);
module.exports = ForwardRef;