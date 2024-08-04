import * as React from "react";
function Layers04Icon({
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
    d: "m21.6 14.327-9.6 4.92-9.6-4.92M12 4.752l9.6 4.92-4.8 2.461-4.8 2.46-9.6-4.92z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Layers04Icon);
export default ForwardRef;