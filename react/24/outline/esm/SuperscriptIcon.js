import * as React from "react";
function SuperscriptIcon({
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
    d: "M2.4 8.212 8.087 13.9m0 0 5.687 5.687m-5.687-5.687 5.687-5.687M8.087 13.9 2.4 19.586M16.903 7.097a2.4 2.4 0 0 1 4.8 0c0 .71-.6 1.2-1.2 1.8l-3.6 3h4.8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SuperscriptIcon);
export default ForwardRef;