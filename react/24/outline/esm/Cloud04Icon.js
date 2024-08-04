import * as React from "react";
function Cloud04Icon({
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
    d: "M4.8 17.105a4.85 4.85 0 0 1-2.4-4.192c0-2.196 1.45-4.05 3.437-4.643C6.874 5.874 9.244 4.2 12 4.2c3.422 0 6.247 2.58 6.666 5.917a3.87 3.87 0 0 1 2.934 3.764c0 1.345-.68 2.53-1.714 3.224M8.4 19.8v-6m8.4 6v-6m-4.2 6v-6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Cloud04Icon);
export default ForwardRef;