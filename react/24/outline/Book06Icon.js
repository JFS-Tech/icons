const React = require("react");
function Book06Icon({
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
    d: "M20.492 15.692H6.462a2.954 2.954 0 0 0-2.954 2.954m16.984-2.954v4.431c0 .816-.66 1.477-1.477 1.477H6.462a2.954 2.954 0 0 1-2.954-2.954m16.984-2.954V3.877c0-.816-.66-1.477-1.477-1.477H6.462a2.954 2.954 0 0 0-2.954 2.954v13.292"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Book06Icon);
module.exports = ForwardRef;