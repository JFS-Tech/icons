const React = require("react");
function Camera01Icon({
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
    d: "M7.2 6.12v1a1 1 0 0 0 .864-.496zm1.68-2.88v-1a1 1 0 0 0-.864.496zm6.24 0 .864-.504a1 1 0 0 0-.864-.496zm1.68 2.88-.864.504a1 1 0 0 0 .864.496zM3.4 18.36V8.52h-2v9.84zM4.8 7.12h2.4v-2H4.8zm3.264-.496 1.68-2.88-1.728-1.008-1.68 2.88zM8.88 4.24h6.24v-2H8.88zm5.376-.496 1.68 2.88 1.728-1.008-1.68-2.88zM16.8 7.12h2.4v-2h-2.4zm3.8 1.4v9.84h2V8.52zm0 9.84a1.4 1.4 0 0 1-1.4 1.4v2a3.4 3.4 0 0 0 3.4-3.4zM19.2 7.12a1.4 1.4 0 0 1 1.4 1.4h2a3.4 3.4 0 0 0-3.4-3.4zM3.4 8.52a1.4 1.4 0 0 1 1.4-1.4v-2a3.4 3.4 0 0 0-3.4 3.4zm1.4 11.24a1.4 1.4 0 0 1-1.4-1.4h-2a3.4 3.4 0 0 0 3.4 3.4zm9.8-6.92a2.6 2.6 0 0 1-2.6 2.6v2a4.6 4.6 0 0 0 4.6-4.6zm-2.6 2.6a2.6 2.6 0 0 1-2.6-2.6h-2a4.6 4.6 0 0 0 4.6 4.6zm-2.6-2.6a2.6 2.6 0 0 1 2.6-2.6v-2a4.6 4.6 0 0 0-4.6 4.6zm2.6-2.6a2.6 2.6 0 0 1 2.6 2.6h2a4.6 4.6 0 0 0-4.6-4.6zm7.2 9.52H4.8v2h14.4z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Camera01Icon);
module.exports = ForwardRef;