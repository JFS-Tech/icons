import * as React from "react";
function Minimise01Icon({
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
    d: "M2.4 15.456h3.866c1.179 0 2.134.917 2.134 2.048V21.6m0-19.2v4.096c0 1.131-.955 2.048-2.133 2.048H2.4m19.2 6.912h-3.867c-1.178 0-2.133.917-2.133 2.048V21.6m0-19.2v4.096c0 1.131.955 2.048 2.133 2.048H21.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Minimise01Icon);
export default ForwardRef;