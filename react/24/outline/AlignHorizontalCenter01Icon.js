const React = require("react");
function AlignHorizontalCenter01Icon({
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
    d: "M2.4 12h19.2m-6.982-5.605L12 9.115m0 0-2.618-2.72M12 9.115V2.4M9.382 17.605 12 14.885m0 0 2.618 2.72M12 14.885V21.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AlignHorizontalCenter01Icon);
module.exports = ForwardRef;