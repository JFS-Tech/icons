import * as React from "react";
function Refresh01Icon({
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
    d: "M5.816 21.6 2.4 18m0 0 3.416-3.6M2.4 18h16.8a2.4 2.4 0 0 0 2.4-2.4V12m-3.416-9.6L21.6 6m0 0-3.416 3.6M21.6 6H4.8a2.4 2.4 0 0 0-2.4 2.4V12"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Refresh01Icon);
export default ForwardRef;