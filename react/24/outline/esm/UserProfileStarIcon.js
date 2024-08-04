import * as React from "react";
function UserProfileStarIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.714 9c0 1.511-1.055 2.585-2.356 2.585C8.056 11.585 7 10.511 7 9c0-1.512 1.055-2.415 2.357-2.415 1.301 0 2.356.903 2.356 2.415ZM15.5 17.685c0 1.555-1.818 2.815-6 2.815s-6-1.26-6-2.815 2.686-2.815 6-2.815 6 1.26 6 2.815ZM17 4l.85 1.83 2.003.243-1.478 1.374.388 1.98L17 8.446l-1.763.981.388-1.98-1.478-1.374 2.003-.243z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserProfileStarIcon);
export default ForwardRef;