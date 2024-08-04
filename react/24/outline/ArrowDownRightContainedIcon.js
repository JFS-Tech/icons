const React = require("react");
function ArrowDownRightContainedIcon({
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
    fill: "#000",
    d: "M16.277 9.747a1 1 0 0 0-1.992-.181zm-1.465 5.066.091.995a1 1 0 0 0 .905-.905zm-5.246-.528a1 1 0 1 0 .18 1.992zm.329-5.805A1 1 0 0 0 8.48 9.895zm4.39 1.086-.468 5.156 1.991.181.47-5.156zm.437 4.25-5.156.47.18 1.991 5.157-.469zm.798.29L9.895 8.48 8.48 9.895l5.625 5.625zM20 12a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowDownRightContainedIcon);
module.exports = ForwardRef;