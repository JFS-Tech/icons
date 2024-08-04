import * as React from "react";
function LockOpen02Icon({
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
    d: "M12 16.2v-2.4M6.375 7.886c0-3.04 2.409-5.486 5.4-5.486 1.864 0 3.5.95 4.47 2.4M6.6 8.8c-.99 0-1.8.823-1.8 1.829v9.142c0 1.006.81 1.829 1.8 1.829h10.8c.99 0 1.8-.823 1.8-1.829V10.63c0-1.006-.81-1.83-1.8-1.83z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LockOpen02Icon);
export default ForwardRef;