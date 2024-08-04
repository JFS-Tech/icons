import * as React from "react";
function TruckIcon({
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
    d: "M5.143 17.029h-.915A1.83 1.83 0 0 1 2.4 15.2V6.971c0-1.01.819-1.828 1.828-1.828h8.229c1.01 0 1.829.819 1.829 1.828V15.2c0 1.01-.82 1.829-1.829 1.829h-.914m4.114 0H15.2a.914.914 0 0 1-.914-.915V8.343c0-.505.409-.914.914-.914h2.303c.278 0 .54.126.714.343l3.183 3.977c.13.163.2.364.2.572v3.793c0 .505-.41.915-.914.915m-10.057-.458a2.286 2.286 0 1 1-4.572 0 2.286 2.286 0 0 1 4.572 0Zm9.6 0a2.286 2.286 0 1 1-4.572 0 2.286 2.286 0 0 1 4.572 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(TruckIcon);
export default ForwardRef;