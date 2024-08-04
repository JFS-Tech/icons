import * as React from "react";
function UmbrellaIcon({
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
    d: "m12.873 12.675-2.423 4.197m6.817-12.96c-2.052 1.253-6.203 4.528-6.388 7.612m7.385-7.036c-.013 2.43-.697 7.707-3.329 9.378M1.8 19.19l2.534-1.115a9.2 9.2 0 0 1 4.93-.698l.077.01a9.2 9.2 0 0 1 4.633 2.018L16 21.074M6.666 9.092l12.413 7.166c.702.406 1.6.165 2.005-.537A8.32 8.32 0 0 0 18.04 4.36l-.549-.317A8.32 8.32 0 0 0 6.13 7.087c-.405.702-.165 1.6.537 2.005"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UmbrellaIcon);
export default ForwardRef;