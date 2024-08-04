import * as React from "react";
function MessageXIcon({
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
    d: "M14.4 14.4 12 12m0 0L9.6 9.6M12 12l-2.4 2.4M12 12l2.4-2.4m7.2 2.4s-.292 2.692-.816 3.878l.817 5.721-4.903-1.226A9.56 9.56 0 0 1 12 21.6a9.6 9.6 0 1 1 9.6-9.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MessageXIcon);
export default ForwardRef;