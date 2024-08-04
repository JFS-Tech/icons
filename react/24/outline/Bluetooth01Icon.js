const React = require("react");
function Bluetooth01Icon({
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
    d: "M8.25 21h-1a1 1 0 0 0 1.63.776zm0-18 .63-.776A1 1 0 0 0 7.25 3zm6 4.875.568.823a1 1 0 0 0 .063-1.6zm0 8.25.63.776a1 1 0 0 0-.062-1.6zM3.568 7.543A1 1 0 1 0 2.432 9.19zM2.432 14.81a1 1 0 0 0 1.136 1.647zm14.523-5.65a1 1 0 1 0-.91 1.781zm-.91 3.899a1 1 0 0 0 .91 1.78zm2.916-6.42a1 1 0 0 0-1.016 1.722zm-1.016 9a1 1 0 0 0 1.016 1.722zM9.25 21v-8.987h-2V21zm0-8.987v-.026h-2v.026zm0-.026V3h-2v8.987zm-1.63-8.21 6 4.874L14.88 7.1l-6-4.875zm1.26 18 6-4.876-1.26-1.552-6 4.875zm5.938-6.475-5.982-4.125-1.135 1.646 5.981 4.125zm-5.982-4.125-.018-.013-1.136 1.646.02.013zm-.018-.013-5.25-3.62L2.432 9.19l5.25 3.62zm4.864-4.112-5.981 4.125 1.135 1.646 5.982-4.125zm-5.98 4.125-.02.013 1.136 1.646.018-.013zm-.02.013-5.25 3.62 1.136 1.647 5.25-3.62zm8.363-.248c.483.246.729.66.729 1.058h2c0-1.268-.78-2.308-1.819-2.84zM16.774 12c0 .398-.246.812-.729 1.059l.91 1.78c1.04-.53 1.819-1.571 1.819-2.839zm1.17-3.639A4.21 4.21 0 0 1 20 12h2a6.21 6.21 0 0 0-3.04-5.361zM20 12c0 1.561-.83 2.916-2.055 3.639l1.016 1.722A6.21 6.21 0 0 0 22 12z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Bluetooth01Icon);
module.exports = ForwardRef;