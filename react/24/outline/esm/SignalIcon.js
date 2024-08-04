import * as React from "react";
function SignalIcon({
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
    d: "M11.947 11.796H12M9.82 7.858a4.5 4.5 0 0 0-2.32 3.938c0 1.694.936 3.17 2.32 3.938m4.36-7.876a4.5 4.5 0 0 1 2.32 3.938c0 1.694-.936 3.17-2.32 3.938M7.5 19.592A9 9 0 0 1 3 11.796C3 8.465 4.81 5.556 7.5 4m9 15.592a9 9 0 0 0 4.5-7.796c0-3.331-1.81-6.24-4.5-7.796"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SignalIcon);
export default ForwardRef;