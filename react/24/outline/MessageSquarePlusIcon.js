const React = require("react");
function MessageSquarePlusIcon({
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
    d: "M12 12V9.6m0 0V7.2m0 2.4H9.6m2.4 0h2.4m-2.713 6.991L6.678 21.6v-5.009H4.8a2.4 2.4 0 0 1-2.4-2.4V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4a2.4 2.4 0 0 1 2.4 2.4v9.391a2.4 2.4 0 0 1-2.4 2.4z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MessageSquarePlusIcon);
module.exports = ForwardRef;