import * as React from "react";
function PerspectiveIcon({
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
    d: "M12 3.608v16.793m-9.6-8.396h19.2M18.96 21.6l-14.4-1.8c-1.2-.12-2.16-1.079-2.16-2.278V6.487c0-1.2.96-2.159 2.16-2.279l14.4-1.799c1.44-.12 2.64.96 2.64 2.279V19.2c0 1.44-1.32 2.519-2.64 2.279z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PerspectiveIcon);
export default ForwardRef;