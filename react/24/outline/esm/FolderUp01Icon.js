import * as React from "react";
function FolderUp01Icon({
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
    d: "M9.547 13.243 12 10.8m0 0 2.346 2.332M12 10.8v6m-9.6.741V5.259a1.2 1.2 0 0 1 1.2-1.2h5.718l2.765 2.953H20.4a1.2 1.2 0 0 1 1.2 1.2v9.33a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.401"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderUp01Icon);
export default ForwardRef;