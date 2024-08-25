const React = require("react");
function Download02Icon({
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
    d: "M4 15.204v3.688c0 .56.21 1.096.586 1.49A1.95 1.95 0 0 0 6 21h12c.53 0 1.04-.222 1.414-.617.375-.395.586-.932.586-1.49v-3.689M12.001 3v11.943m0 0 4.572-4.564M12 14.943 7.43 10.379"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Download02Icon);
module.exports = ForwardRef;