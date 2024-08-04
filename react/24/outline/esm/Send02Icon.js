import * as React from "react";
function Send02Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 25 24",
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
    d: "M23.8 12H11.16m-5.326 4.17H3.4m2.434-4.024H1m4.834-4.022H3.4m6.707-3.528 13.256 6.427a1.086 1.086 0 0 1 0 1.954l-13.256 6.427c-.908.44-1.873-.488-1.468-1.413l2.43-5.556a1.09 1.09 0 0 0 0-.87L8.64 6.008c-.405-.924.56-1.852 1.468-1.412Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Send02Icon);
export default ForwardRef;