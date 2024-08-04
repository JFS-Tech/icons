import * as React from "react";
function UserProfile03Icon({
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
    d: "M14.818 7.01c0 1.515-1.289 2.865-2.818 2.865S9.182 8.525 9.182 7.01C9.182 5.446 10.516 4 12 4s2.818 1.446 2.818 3.01ZM20 16.778c0 .696-.379 1.457-1.61 2.099C17.126 19.536 15.06 20 12 20s-5.126-.464-6.39-1.123C4.379 18.235 4 17.474 4 16.777c0-.549.513-1.353 2.06-2.08 1.47-.688 3.568-1.141 5.94-1.141s4.47.453 5.94 1.142c1.547.726 2.06 1.53 2.06 2.08Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserProfile03Icon);
export default ForwardRef;