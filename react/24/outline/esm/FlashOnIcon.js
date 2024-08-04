import * as React from "react";
function FlashOnIcon({
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
    d: "M19.097 11.087 12.09 21.32c-.353.509-1.183.28-1.183-.332l-.01-5.854c0-.674-.571-1.214-1.277-1.224l-4.183-.052c-.508-.01-.81-.54-.529-.945L11.915 2.68c.353-.509 1.183-.28 1.183.332l.01 5.854c0 .674.571 1.214 1.277 1.224l4.182.052c.499 0 .8.54.53.945"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FlashOnIcon);
export default ForwardRef;