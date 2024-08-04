const React = require("react");
function Alarm04Icon({
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
    d: "M12 9.6v3m0 0v3m0-3h3m-3 0H9m-3.144 6.312L3.168 21.6m17.664 0-2.688-2.688M4.8 2.4l-3 3m20.4 0-3-3m1.248 10.368a8.448 8.448 0 1 1-16.896 0 8.448 8.448 0 0 1 16.896 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Alarm04Icon);
module.exports = ForwardRef;