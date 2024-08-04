const React = require("react");
function Home05Icon({
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
    strokeLinejoin: "round",
    d: "m20.381 10.875-1.631-1.63V5.25c0-.619-.506-1.125-1.125-1.125H16.5c-.619 0-1.125.506-1.125 1.125v.622l-2.25-2.248C12.818 3.334 12.537 3 12 3s-.818.334-1.125.624l-7.256 7.251C3.268 11.241 3 11.507 3 12c0 .633.486 1.125 1.125 1.125H5.25v6.75c0 .619.506 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125v-4.5c0-.619.506-1.125 1.125-1.125h2.25c.619 0 1.125.506 1.125 1.125v4.5c0 .621-.059 1.125.563 1.125h2.812c.619 0 1.125-.506 1.125-1.125v-6.75h1.125c.639 0 1.125-.492 1.125-1.125 0-.493-.268-.76-.619-1.125Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Home05Icon);
module.exports = ForwardRef;