import * as React from "react";
function FlashOffIcon({
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
    d: "m14.148 18.32-2.055 3c-.352.508-1.183.28-1.183-.332l-.01-5.854c0-.674-.571-1.214-1.277-1.224l-4.182-.052c-.509-.01-.81-.54-.53-.945l1.692-2.46M8.357 7.87l3.55-5.189c.352-.508 1.183-.28 1.183.332l.01 5.854c0 .674.57 1.214 1.277 1.225l4.182.051c.509.01.81.54.53.945l-3.26 4.753M20.4 20.4 3.6 3.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FlashOffIcon);
export default ForwardRef;