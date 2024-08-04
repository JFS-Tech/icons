const React = require("react");
function Key02Icon({
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
    d: "M9 9h.121m8.88 12.6-6.693-6.598c-1.295.502-2.842.305-4.28-.116-3.423-1.001-5.375-4.549-4.36-7.924 1.017-3.375 4.616-5.299 8.04-4.297 3.423 1.001 5.374 4.55 4.358 7.924l-.159.865 6.693 6.598V21.6z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Key02Icon);
module.exports = ForwardRef;