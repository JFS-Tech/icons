import * as React from "react";
function Map04Icon({
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
    fill: "#000",
    d: "m15.25 8.496-.382.924zm4.243 10.615a1 1 0 1 0 .764-1.848zM3.945 10.515a1 1 0 1 0-.765 1.848zM6.176 4h11.647V2H6.176zm11.647 16H6.176v2h11.647zM4 17.823V6.176H2v11.647zM6.176 20A2.176 2.176 0 0 1 4 17.823H2A4.176 4.176 0 0 0 6.176 22zM20 17.823A2.176 2.176 0 0 1 17.823 20v2A4.177 4.177 0 0 0 22 17.823zM17.823 4C19.027 4 20 4.974 20 6.176h2A4.176 4.176 0 0 0 17.823 2zM6.176 2A4.176 4.176 0 0 0 2 6.176h2C4 4.974 4.974 4 6.176 4zM20 10.875v6.948h2v-6.948zM4.305 5.049l10.563 4.37.764-1.847L5.07 3.2zm10.563 4.37 5.75 2.38.764-1.848-5.75-2.38zM16.937 3.1l-2.574 4.933 1.774.925 2.573-4.933zm3.32 14.164-16.312-6.75-.765 1.848 16.313 6.75zM20 6.176v4.699h2V6.176z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Map04Icon);
export default ForwardRef;