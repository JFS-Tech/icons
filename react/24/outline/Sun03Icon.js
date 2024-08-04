const React = require("react");
function Sun03Icon({
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
    d: "M12 5.513V2.4m0 19.2v-3.114M18.486 12H21.6M2.4 12h3.113m11.074-4.587 2.201-2.201M5.211 18.788l2.202-2.201m9.174 0 2.201 2.2M5.211 5.213l2.202 2.201m8.156 4.46a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Sun03Icon);
module.exports = ForwardRef;