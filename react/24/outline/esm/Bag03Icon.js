import * as React from "react";
function Bag03Icon({
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
    d: "M15.6 8.342a3.6 3.6 0 1 1-7.2 0m-3.673 12.6h14.546c1.285 0 2.327-1.022 2.327-2.284L20.109 5.342c0-1.261-1.042-2.284-2.327-2.284H5.927C4.642 3.058 3.6 4.081 3.6 5.342L2.4 18.658c0 1.262 1.042 2.284 2.327 2.284"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Bag03Icon);
export default ForwardRef;