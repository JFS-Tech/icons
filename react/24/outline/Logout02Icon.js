const React = require("react");
function Logout02Icon({
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
    d: "M8.78 3.6H5.074c-.561 0-1.1.221-1.497.615s-.62.928-.62 1.485v12.6c0 .557.223 1.091.62 1.485s.936.615 1.497.615H8.78m.263-8.4h12m0 0-4.585-4.8m4.585 4.8-4.585 4.8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Logout02Icon);
module.exports = ForwardRef;