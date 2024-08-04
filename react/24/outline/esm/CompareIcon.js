import * as React from "react";
function CompareIcon({
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
    d: "M5.7 9.2a1 1 0 0 0 0 2zm4.05 1 .707.707a1 1 0 0 0 0-1.414zm-2.507 1.093a1 1 0 1 0 1.414 1.414zm1.414-3.6a1 1 0 0 0-1.414 1.414zM17.85 14.8a1 1 0 1 0 0-2zm-4.05-1-.707-.707a1 1 0 0 0 0 1.414zm2.507-1.093a1 1 0 0 0-1.414-1.414zm-1.414 3.6a1 1 0 0 0 1.414-1.414zM4.8 4h6.3V2H4.8zm6.75 12.4H4.8v2h6.75zM4 15.6V4.8H2v10.8zm7.9-10.8v2.7h2V4.8zM4.8 16.4a.8.8 0 0 1-.8-.8H2a2.8 2.8 0 0 0 2.8 2.8zM11.1 4a.8.8 0 0 1 .8.8h2A2.8 2.8 0 0 0 11.1 2zM4.8 2A2.8 2.8 0 0 0 2 4.8h2a.8.8 0 0 1 .8-.8zm8.1 5.6h6.3v-2h-6.3zm7.1.8v10.8h2V8.4zM19.2 20h-6.3v2h6.3zm-7.1-.8V8.4h-2v10.8zm.8.8a.8.8 0 0 1-.8-.8h-2a2.8 2.8 0 0 0 2.8 2.8zm7.1-.8a.8.8 0 0 1-.8.8v2a2.8 2.8 0 0 0 2.8-2.8zm-.8-11.6a.8.8 0 0 1 .8.8h2a2.8 2.8 0 0 0-2.8-2.8zm-6.3-2a2.8 2.8 0 0 0-2.8 2.8h2a.8.8 0 0 1 .8-.8zm-7.2 5.6h4.05v-2H5.7zm2.957 1.507 1.8-1.8-1.414-1.414-1.8 1.8zm1.8-3.214-1.8-1.8-1.414 1.414 1.8 1.8zM17.85 12.8H13.8v2h4.05zm-2.957-1.507-1.8 1.8 1.414 1.414 1.8-1.8zm-1.8 3.214 1.8 1.8 1.414-1.414-1.8-1.8z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CompareIcon);
export default ForwardRef;