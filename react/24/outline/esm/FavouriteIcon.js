import * as React from "react";
function FavouriteIcon({
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
    d: "M8.79 6.484h5.417m-2.707 8.71 5.667 5.062a.5.5 0 0 0 .833-.373V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14.883a.5.5 0 0 0 .833.373z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FavouriteIcon);
export default ForwardRef;