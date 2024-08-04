const React = require("react");
function FolderX02Icon({
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
    d: "M12.6 19.712H4.8a2.4 2.4 0 0 1-2.4-2.4V5.028a1.2 1.2 0 0 1 1.2-1.2h5.718l2.765 2.954H20.4a1.2 1.2 0 0 1 1.2 1.2v3.188m0 9-2.4-2.4m0 0-2.4-2.4m2.4 2.4-2.4 2.4m2.4-2.4 2.4-2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderX02Icon);
module.exports = ForwardRef;