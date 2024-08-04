const React = require("react");
function CoinNumberIcon({
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
    d: "M7.857 7.636a6.982 6.982 0 1 1 8.997 8.362m-8.997 1.128h1.524m0 0h1.418m-1.418 0v-5.564l-1.745 1.2m8.727 1.856a6.982 6.982 0 1 1-13.964 0 6.982 6.982 0 0 1 13.964 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CoinNumberIcon);
module.exports = ForwardRef;