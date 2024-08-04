const React = require("react");
function Globe02Icon({
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
    d: "m2.4 20.206 1.32-1.412c1.894 1.918 4.525 2.665 7.433 2.665 5.77 0 10.447-4.677 10.447-10.447 0-2.862-1.15-5.455-3.014-7.341l1.32-1.13m-2.56 8.153a6.794 6.794 0 1 1-13.587 0 6.794 6.794 0 0 1 13.588 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Globe02Icon);
module.exports = ForwardRef;