import * as React from "react";
function CameraLensIcon({
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
    d: "m7.8 10.2 3-2.128L17.4 3M12 7.2l9 6m-4.8-2.4-3 10.2m1.2-5.4H3m6.6 0L4.8 3m2.4 18.6h9.6a4.8 4.8 0 0 0 4.8-4.8V7.2a4.8 4.8 0 0 0-4.8-4.8H7.2a4.8 4.8 0 0 0-4.8 4.8v9.6a4.8 4.8 0 0 0 4.8 4.8"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CameraLensIcon);
export default ForwardRef;