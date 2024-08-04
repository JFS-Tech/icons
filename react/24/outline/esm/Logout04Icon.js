import * as React from "react";
function Logout04Icon({
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
    d: "M14.647 7.8V5.7c0-.557-.223-1.091-.62-1.485a2.13 2.13 0 0 0-1.498-.615H5.118c-.562 0-1.1.221-1.498.615S3 5.143 3 5.7v12.6c0 .557.223 1.091.62 1.485s.936.615 1.498.615h7.411c.562 0 1.1-.221 1.498-.615a2.1 2.1 0 0 0 .62-1.485v-2.1M8.294 12H21m0 0-3.177-3.15M21 12l-3.177 3.15"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Logout04Icon);
export default ForwardRef;