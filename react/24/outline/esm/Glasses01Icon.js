import * as React from "react";
function Glasses01Icon({
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
    d: "M8.12 12a2.36 2.36 0 0 1-2.36 2.36v2A4.36 4.36 0 0 0 10.12 12zm-2.36 2.36A2.36 2.36 0 0 1 3.4 12h-2a4.36 4.36 0 0 0 4.36 4.36zM3.4 12a2.36 2.36 0 0 1 2.36-2.36v-2A4.36 4.36 0 0 0 1.4 12zm2.36-2.36A2.36 2.36 0 0 1 8.12 12h2a4.36 4.36 0 0 0-4.36-4.36zm4.195 2.14A2.36 2.36 0 0 1 12 10.6v-2a4.36 4.36 0 0 0-3.776 2.18zM12 10.6c.872 0 1.635.473 2.045 1.18l1.731-1A4.36 4.36 0 0 0 12 8.6zm8.6 1.4a2.36 2.36 0 0 1-2.36 2.36v2A4.36 4.36 0 0 0 22.6 12zm-2.36 2.36A2.36 2.36 0 0 1 15.88 12h-2a4.36 4.36 0 0 0 4.36 4.36zM15.88 12a2.36 2.36 0 0 1 2.36-2.36v-2A4.36 4.36 0 0 0 13.88 12zm2.36-2.36A2.36 2.36 0 0 1 20.6 12h2a4.36 4.36 0 0 0-4.36-4.36z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Glasses01Icon);
export default ForwardRef;