import * as React from "react";
function ArrowUpContained02Icon({
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
    d: "M7.382 10.569a1 1 0 0 0 1.28 1.536zM12 8.022l.64-.768a1 1 0 0 0-1.28 0zm3.337 4.083a1 1 0 0 0 1.28-1.536zM11 15.977a1 1 0 1 0 2 0zm-2.337-3.872 3.977-3.314-1.28-1.537-3.978 3.315zm2.697-3.314 3.977 3.314 1.28-1.536-3.977-3.315zM11 8.022v7.955h2V8.022zm6.657-1.679a8 8 0 0 1 0 11.314l1.414 1.414c3.905-3.905 3.905-10.237 0-14.142zm0 11.314a8 8 0 0 1-11.314 0L4.93 19.07c3.905 3.905 10.237 3.905 14.142 0zm-11.314 0a8 8 0 0 1 0-11.314L4.93 4.93c-3.905 3.905-3.905 10.237 0 14.142zm0-11.314a8 8 0 0 1 11.314 0L19.07 4.93c-3.905-3.905-10.237-3.905-14.142 0z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowUpContained02Icon);
export default ForwardRef;