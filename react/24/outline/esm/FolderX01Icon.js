import * as React from "react";
function FolderX01Icon({
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
    d: "M14.4 15.6 12 13.2m0 0-2.4-2.4m2.4 2.4-2.4 2.4m2.4-2.4 2.4-2.4m-12 6.741.001-9.124V5.259a1.2 1.2 0 0 1 1.2-1.2h5.718l2.765 2.953H20.4a1.2 1.2 0 0 1 1.2 1.2v9.33a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.401"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderX01Icon);
export default ForwardRef;