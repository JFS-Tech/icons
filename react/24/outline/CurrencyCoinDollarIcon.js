const React = require("react");
function CurrencyCoinDollarIcon({
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
    d: "M13.875 9.982a1 1 0 1 0 1.89-.654zM13.2 8.433l.044-.999H13.2zM10.8 12.1v1zm2.4 3.667v1zm-2.4 0-.044.999h.044zm-.675-1.55a1 1 0 1 0-1.89.654zM13 6.6a1 1 0 1 0-2 0zm-2 1.833a1 1 0 1 0 2 0zm2 7.334a1 1 0 1 0-2 0zM11 17.6a1 1 0 1 0 2 0zm4.765-8.272a2.83 2.83 0 0 0-.97-1.335L13.592 9.59a.83.83 0 0 1 .284.392zm-.97-1.335a2.8 2.8 0 0 0-1.551-.559l-.088 1.998a.8.8 0 0 1 .435.158zm-1.595-.56h-2.4v2h2.4zm-2.4 0c-.749 0-1.463.303-1.986.837l1.427 1.4a.78.78 0 0 1 .559-.237zm-1.986.837A2.85 2.85 0 0 0 8 10.267h2a.85.85 0 0 1 .24-.596zM8 10.267c0 .745.29 1.464.814 1.997l1.427-1.402a.85.85 0 0 1-.241-.595zm.814 1.997a2.78 2.78 0 0 0 1.986.836v-2a.78.78 0 0 1-.56-.238zm1.986.836h2.4v-2h-2.4zm2.4 0c.206 0 .408.083.56.238l1.426-1.402A2.78 2.78 0 0 0 13.2 11.1zm.56.238a.85.85 0 0 1 .24.595h2a2.85 2.85 0 0 0-.814-1.997zm.24.595a.85.85 0 0 1-.24.596l1.426 1.401A2.85 2.85 0 0 0 16 13.933zm-.24.596a.78.78 0 0 1-.56.238v2c.749 0 1.463-.303 1.986-.837zm-.56.238h-2.4v2h2.4zm-2.356 0a.78.78 0 0 1-.436-.157l-1.204 1.596c.449.34.99.535 1.552.56zm-.436-.157a.83.83 0 0 1-.283-.393l-1.89.654c.184.531.52.997.969 1.335zM11 6.6v1.833h2V6.6zm0 9.167V17.6h2v-1.833zM20.6 12a8.6 8.6 0 0 1-8.6 8.6v2c5.854 0 10.6-4.746 10.6-10.6zM12 20.6A8.6 8.6 0 0 1 3.4 12h-2c0 5.854 4.746 10.6 10.6 10.6zM3.4 12A8.6 8.6 0 0 1 12 3.4v-2C6.146 1.4 1.4 6.146 1.4 12zM12 3.4a8.6 8.6 0 0 1 8.6 8.6h2c0-5.854-4.746-10.6-10.6-10.6z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CurrencyCoinDollarIcon);
module.exports = ForwardRef;