const React = require("react");
function FolderUp02Icon({
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
    d: "M14.026 19.712H4.774a2.4 2.4 0 0 1-2.4-2.4V5.029a1.2 1.2 0 0 1 1.2-1.2h5.718l2.765 2.954h8.316a1.2 1.2 0 0 1 1.2 1.2v3.188m-4.746 5.442 2.454-2.442m0 0 2.346 2.332M19.28 14.17v6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderUp02Icon);
module.exports = ForwardRef;