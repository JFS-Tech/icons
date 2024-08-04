import * as React from "react";
function CurrencyCoinEuroIcon({
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
    d: "M15 8.623c-.581-.664-1.317-1.113-2.116-1.291a3.6 3.6 0 0 0-2.376.29c-.75.368-1.39.986-1.84 1.776a5.4 5.4 0 0 0-.69 2.668c0 .949.24 1.877.69 2.667s1.09 1.409 1.84 1.776c.75.368 1.577.469 2.376.291s1.535-.627 2.116-1.292m-2.892-4.82H6.6m0 2.755h5.508M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CurrencyCoinEuroIcon);
export default ForwardRef;