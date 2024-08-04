import * as React from "react";
function ShieldPlusIcon({
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
    d: "m4.8 5.788-.447-.895a1 1 0 0 0-.553.895zm7.2 15.6-.534.845a1 1 0 0 0 1.068 0zm7.2-15.6h1a1 1 0 0 0-.553-.895zm-8.81-2.795-.447-.895zm3.22 0 .447-.895zm1.09 8.895a1 1 0 0 0 0-2zm-5.4-2a1 1 0 0 0 0 2zm1.7 3.7a1 1 0 0 0 2 0zm2-5.4a1 1 0 1 0-2 0zm-3.057-6.09-5.59 2.795.894 1.79 5.59-2.796zM3.8 5.788v8.028h2V5.788zm0 8.028c0 1.48.863 2.881 2.144 4.199 1.301 1.338 3.178 2.738 5.522 4.218l1.068-1.69c-2.293-1.45-4.017-2.75-5.156-3.922-1.16-1.193-1.578-2.113-1.578-2.805zm8.734 8.417c2.305-1.456 4.194-2.708 5.5-3.971 1.334-1.29 2.166-2.694 2.166-4.446h-2c0 1.02-.45 1.938-1.556 3.008-1.134 1.097-2.845 2.245-5.178 3.718zm7.666-8.417V5.788h-2v8.028zm-.553-8.923-5.59-2.795-.894 1.789 5.59 2.795zm-8.81-1.006a2.6 2.6 0 0 1 2.326 0l.894-1.789a4.6 4.6 0 0 0-4.114 0zm3.863 6H12v2h2.7zm-2.7 0H9.3v2H12zm1 3.7v-2.7h-2v2.7zm0-2.7v-2.7h-2v2.7z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ShieldPlusIcon);
export default ForwardRef;