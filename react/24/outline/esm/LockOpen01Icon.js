import * as React from "react";
function LockOpen01Icon({
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
    d: "M6.6 8.8v-.914C6.6 4.846 9.01 2.4 12 2.4c1.864 0 3.5.95 4.47 2.4m-9.87 4c-.99 0-1.8.823-1.8 1.829v9.142c0 1.006.81 1.829 1.8 1.829h10.8c.99 0 1.8-.823 1.8-1.829V10.63c0-1.006-.81-1.83-1.8-1.83zM12 13.37c.99 0 1.8.823 1.8 1.829s-.81 1.829-1.8 1.829-1.8-.823-1.8-1.83c0-1.005.81-1.828 1.8-1.828Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LockOpen01Icon);
export default ForwardRef;