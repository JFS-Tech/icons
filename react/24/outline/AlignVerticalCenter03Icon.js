const React = require("react");
function AlignVerticalCenter03Icon({
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
    d: "M12 21.6V2.4m-6.88 12L2.4 11.782m0 0 2.72-2.618M2.4 11.782h6.715m9.765-2.618 2.72 2.618m0 0L18.88 14.4m2.72-2.618h-6.715"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AlignVerticalCenter03Icon);
module.exports = ForwardRef;