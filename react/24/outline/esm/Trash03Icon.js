import * as React from "react";
function Trash03Icon({
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
    d: "M4 6.176h16M9 3h6m.5 18h-7c-1.105 0-2-.948-2-2.118L6.043 7.28c-.023-.601.43-1.103 1-1.103h9.915c.568 0 1.022.502.999 1.103L17.5 18.882c0 1.17-.895 2.118-2 2.118Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Trash03Icon);
export default ForwardRef;