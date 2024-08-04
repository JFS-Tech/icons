import * as React from "react";
function Luggage03Icon({
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
    d: "M8.344 18.71V8.478m7.719 10.23v-3.978M8.938 7.91V5.636c0-.628.531-1.137 1.187-1.137h4.156c.656 0 1.188.509 1.188 1.137V7.91m.594 2.842h-2.97v3.979h5.345v-3.979zm0 0V7.91m0 0H5.374C4.063 7.91 3 8.928 3 10.184v6.82c0 1.256 1.063 2.274 2.375 2.274h14.25c1.312 0 2.375-1.018 2.375-2.274v-6.82c0-1.256-1.063-2.274-2.375-2.274z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Luggage03Icon);
export default ForwardRef;