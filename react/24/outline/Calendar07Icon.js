const React = require("react");
function Calendar07Icon({
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
    d: "M7.143 7.902h9.638M6.485 2.438v1.639m10.828-1.64v1.64m3.187 3v11.486a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3V7.076a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Calendar07Icon);
module.exports = ForwardRef;