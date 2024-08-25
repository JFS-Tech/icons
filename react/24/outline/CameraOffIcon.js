const React = require("react");
function CameraOffIcon({
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
    d: "M2.4 7.98v9.84a2.4 2.4 0 0 0 2.4 2.4h9.6M6 5.58h1.2L8.88 2.7h6.24l1.68 2.88h2.4a2.4 2.4 0 0 1 2.4 2.4v9.84c0 .888-.483 1.664-1.2 2.079M14.683 14.7A3.6 3.6 0 0 0 9.6 9.617m1.8 6.233a3.6 3.6 0 0 1-2.972-3.1M21 21.3 3 2.7"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CameraOffIcon);
module.exports = ForwardRef;