import * as React from "react";
function PaletteIcon({
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
    d: "M12 6v.033M6.033 12H6m10.243-4.242-.024.023M7.781 16.22l-.023.024M7.78 7.78l-.023-.024M12 21.6a9.6 9.6 0 1 1 9.6-9.6c0 1.614-1.491 2.688-3.105 2.688h-.627a2.083 2.083 0 0 0-1.864 3.016c.145.29.22.608.22.932v.19c0 1.1-.618 2.142-1.68 2.433A9.6 9.6 0 0 1 12 21.6"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PaletteIcon);
export default ForwardRef;