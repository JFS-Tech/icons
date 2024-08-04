import * as React from "react";
function Presentation03Icon({
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
    d: "M9.6 16.2 7.8 21m8.793-.067-2.12-4.667M9.6 9.043 12.054 6.6m0 0L14.4 8.932M12.054 6.6v6M4.8 16.2a2.4 2.4 0 0 1-2.4-2.4V5.4A2.4 2.4 0 0 1 4.8 3h14.4a2.4 2.4 0 0 1 2.4 2.4v8.4a2.4 2.4 0 0 1-2.4 2.4z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Presentation03Icon);
export default ForwardRef;