import * as React from "react";
function Image01Icon({
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
    d: "M8.16 15.6 12 12l2.56 1.8 3.627-3.6 3.2 3M2.4 9v10.8h12.8m-5.12-12v-.09M21.6 15.2v-10a1 1 0 0 0-1-1H7.24a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1H20.6a1 1 0 0 0 1-1"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Image01Icon);
export default ForwardRef;