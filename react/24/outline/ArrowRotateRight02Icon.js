const React = require("react");
function ArrowRotateRight02Icon({
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
    d: "M19.129 14.5c-1.018 3.194-3.934 5.5-7.371 5.5C7.473 20 4 16.418 4 12s3.473-8 7.758-8c2.513 0 4.747 1.232 6.164 3.143m.555.857a8 8 0 0 0-.555-.857m0 0L16.122 9H20V5zm.139 1.524L19.273 7"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowRotateRight02Icon);
module.exports = ForwardRef;