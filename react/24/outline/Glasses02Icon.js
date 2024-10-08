const React = require("react");
function Glasses02Icon({
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
    fill: "#000",
    d: "M1.406 15.967a1 1 0 1 0 1.988.226zM3.52 6.2l-.643-.766a1 1 0 0 0-.35.653zm2.883-1.113a1 1 0 1 0-1.286-1.532zm14.203 11.107a1 1 0 0 0 1.987-.226zm-.126-9.994.994-.113a1 1 0 0 0-.351-.653zm-1.597-2.645a1 1 0 1 0-1.286 1.532zM8.12 16.32a2.36 2.36 0 0 1-2.36 2.36v2a4.36 4.36 0 0 0 4.36-4.36zm-2.36 2.36a2.36 2.36 0 0 1-2.36-2.36h-2a4.36 4.36 0 0 0 4.36 4.36zM3.4 16.32a2.36 2.36 0 0 1 2.36-2.36v-2a4.36 4.36 0 0 0-4.36 4.36zm2.36-2.36a2.36 2.36 0 0 1 2.36 2.36h2a4.36 4.36 0 0 0-4.36-4.36zm4.195 2.14A2.36 2.36 0 0 1 12 14.92v-2a4.36 4.36 0 0 0-3.776 2.18zM12 14.92c.872 0 1.635.473 2.045 1.18l1.731-1A4.36 4.36 0 0 0 12 12.92zm8.6 1.4a2.36 2.36 0 0 1-2.36 2.36v2a4.36 4.36 0 0 0 4.36-4.36zm-2.36 2.36a2.36 2.36 0 0 1-2.36-2.36h-2a4.36 4.36 0 0 0 4.36 4.36zm-2.36-2.36a2.36 2.36 0 0 1 2.36-2.36v-2a4.36 4.36 0 0 0-4.36 4.36zm2.36-2.36a2.36 2.36 0 0 1 2.36 2.36h2a4.36 4.36 0 0 0-4.36-4.36zM3.394 16.193l1.12-9.881-1.988-.226-1.12 9.881zm.769-9.228 2.24-1.879-1.286-1.532-2.24 1.879zm18.43 9.002-1.12-9.88-1.987.225 1.12 9.88zm-1.47-10.534-2.24-1.88-1.286 1.533 2.24 1.88z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Glasses02Icon);
module.exports = ForwardRef;