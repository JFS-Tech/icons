const React = require("react");
function ArrowExpand02Icon({
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
    d: "M14.206 4H20m0 0v5.793M20 4l-5.794 5.793M9.794 20H4m0 0v-5.793M4 20l6-6m9.999.206V20m0 0h-5.793M20 20l-5.793-5.794M4 9.794V4m0 0h5.793M4 4l6 6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowExpand02Icon);
module.exports = ForwardRef;