import * as React from "react";
function SpeakerIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6.375C4 4.511 5.535 3 7.429 3h9.142C18.465 3 20 4.511 20 6.375v11.25C20 19.489 18.465 21 16.571 21H7.43C5.535 21 4 19.489 4 17.625z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.081 6.375H12v.072h.081zM15.429 14.25c0 1.864-1.536 3.375-3.429 3.375s-3.429-1.511-3.429-3.375 1.536-3.375 3.429-3.375 3.429 1.511 3.429 3.375Z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SpeakerIcon);
export default ForwardRef;