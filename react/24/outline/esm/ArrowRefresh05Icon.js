import * as React from "react";
function ArrowRefresh05Icon({
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
    d: "M12 20.694c-4.97 0-9-3.892-9-8.694 0-3.035 1.61-5.708 4.05-7.263m6.314-1.332C17.687 4.04 21 7.646 21 12c0 3.132-1.715 5.878-4.286 7.408M13.126 5.61l-2.387-2.306L13.126 1zm-2.388 12.778 2.387 2.306L10.738 23z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowRefresh05Icon);
export default ForwardRef;