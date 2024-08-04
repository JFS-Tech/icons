import * as React from "react";
function AlignVerticalCenter01Icon({
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
    d: "M12 21.6V2.4M6.395 9.382 9.115 12m0 0-2.72 2.618M9.115 12H2.4m15.205 2.618L14.885 12m0 0 2.72-2.618M14.885 12H21.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AlignVerticalCenter01Icon);
export default ForwardRef;