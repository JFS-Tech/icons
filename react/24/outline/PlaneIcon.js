const React = require("react");
function PlaneIcon({
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
    d: "m2.877 15.398 3.817 1.908 1.909 3.817 1.908-1.909v-2.862l3.34-3.34 2.862 8.588 2.863-2.863-2.386-9.065 3.817-3.817a2.024 2.024 0 1 0-2.862-2.862L14.328 6.81 5.263 4.424 2.4 7.287l8.588 2.862-3.34 3.34H4.786z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PlaneIcon);
module.exports = ForwardRef;