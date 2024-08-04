import * as React from "react";
function Wallet02Icon({
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
    d: "M17.76 3.04H3.893c-.825 0-1.491.887-1.492 1.8-.001 1.2.667 2.387 1.492 2.387h15.574c1.178 0 2.133-.245 2.133.933V18.4a2.56 2.56 0 0 1-2.56 2.56H4.96A2.56 2.56 0 0 1 2.4 18.4V5.44m14.097 7.823-.017.017"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Wallet02Icon);
export default ForwardRef;