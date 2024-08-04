const React = require("react");
function LockOpen04Icon({
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
    d: "M6.6 9.056V7.86C6.6 4.836 9.01 2.4 12 2.4c1.596 0 3.026.693 4.013 1.8M12 15.685v-2.4m7.2 1.147c0 3.959-3.223 7.168-7.2 7.168-3.976 0-7.2-3.21-7.2-7.168S8.024 7.264 12 7.264s7.2 3.21 7.2 7.168Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LockOpen04Icon);
module.exports = ForwardRef;