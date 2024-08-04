const React = require("react");
function Upload03Icon({
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
    d: "M4 15.204v3.688c0 .56.21 1.096.586 1.49A1.95 1.95 0 0 0 6 21h12c.53 0 1.04-.222 1.414-.617.375-.395.586-.932.586-1.49v-3.689m-8-.261V3m0 0L7.43 7.563M12 3l4.572 4.563"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Upload03Icon);
module.exports = ForwardRef;