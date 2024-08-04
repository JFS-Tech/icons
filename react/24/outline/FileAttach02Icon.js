const React = require("react");
function FileAttach02Icon({
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
    d: "M10.8 21.6H6.6a2.4 2.4 0 0 1-2.4-2.4V4.8a2.4 2.4 0 0 1 2.4-2.4h10.8a2.4 2.4 0 0 1 2.4 2.4v5.4m-6 5.354V18.5c0 1.455 1.551 2.79 3.006 2.79s2.994-1.335 2.994-2.79v-3.72c0-.77-.443-1.552-1.428-1.552-1.053 0-1.565.782-1.565 1.553v3.564"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileAttach02Icon);
module.exports = ForwardRef;