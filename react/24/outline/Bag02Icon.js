const React = require("react");
function Bag02Icon({
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
    d: "m16.41 10.709-.005-.006m-8.29.006-.007-.006m8.303-4.152a4.151 4.151 0 1 0-8.303 0M5.513 21.6h12.973c1.147 0 2.076-.93 2.076-2.076V8.627c0-1.146-.93-2.076-2.076-2.076H5.513c-1.146 0-2.075.93-2.075 2.076v10.897c0 1.147.93 2.076 2.075 2.076"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Bag02Icon);
module.exports = ForwardRef;