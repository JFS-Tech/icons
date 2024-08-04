import * as React from "react";
function FolderCodeIcon({
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
    d: "M9.693 16.507a1 1 0 0 0 1.414-1.414zM8.4 13.8l-.707-.707a1 1 0 0 0 0 1.414zm2.707-1.293a1 1 0 0 0-1.414-1.414zm3.2-1.414a1 1 0 0 0-1.414 1.414zM15.6 13.8l.707.707a1 1 0 0 0 0-1.414zm-2.707 1.293a1 1 0 0 0 1.414 1.414zM3.77 5.2h5.486v-2H3.771zm5.857.4V8h2V5.6zm0 2.4v.2h2V8zm-.371-2.8c.186 0 .371.16.371.4h2c0-1.306-1.042-2.4-2.371-2.4zm-5.486-2C2.442 3.2 1.4 4.294 1.4 5.6h2c0-.24.186-.4.371-.4zM2.4 9h8.229V7h-8.23zm8.229 0h9.6V7h-9.6zm9.97.4v9h2v-9zm-.37 9.4H3.77v2H20.23zm-16.83-.4V8h-2v10.4zm.372.4a.386.386 0 0 1-.371-.4h-2c0 1.306 1.042 2.4 2.371 2.4zm16.829-.4c0 .24-.186.4-.372.4v2c1.33 0 2.372-1.094 2.372-2.4zM20.228 9c.186 0 .372.16.372.4h2c0-1.306-1.043-2.4-2.372-2.4zm-9.121 6.093-2-2-1.414 1.414 2 2zm-2-.586 2-2-1.414-1.414-2 2zm3.786-2 2 2 1.414-1.414-2-2zm2 .586-2 2 1.414 1.414 2-2zM3.4 8V5.6h-2V8z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderCodeIcon);
export default ForwardRef;