const React = require("react");
function FolderOpen03Icon({
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
    d: "M5.4 5.33v-1.8a1.2 1.2 0 0 1 1.2-1.2H18a1.2 1.2 0 0 1 1.2 1.2v4.8M2.4 19.27V6.989a1.2 1.2 0 0 1 1.2-1.2h5.718l2.765 2.954H20.4a1.2 1.2 0 0 1 1.2 1.2v9.329a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderOpen03Icon);
module.exports = ForwardRef;