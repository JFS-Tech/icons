import * as React from "react";
function FolderPlus02Icon({
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
    d: "M12.103 19.515h-7.8a2.4 2.4 0 0 1-2.4-2.4V4.832a1.2 1.2 0 0 1 1.2-1.2h5.718l2.765 2.954h8.317a1.2 1.2 0 0 1 1.2 1.2v3.188m-2.4 9.394v-3.394m0 0v-3.395m0 3.395h-3.394m3.394 0h3.394"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderPlus02Icon);
export default ForwardRef;