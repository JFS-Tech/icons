import * as React from "react";
function GlobeIcon({
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
    d: "M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c-2.175 0-3.937-4.03-3.937-9S9.825 3 12 3m0 18c2.175 0 3.938-4.03 3.938-9S14.175 3 12 3M4.688 16.374c1.648-.944 4.388-1.561 7.488-1.561 3.236 0 6.079.672 7.699 1.687M4.688 7.626c1.648.944 4.388 1.561 7.488 1.561 3.236 0 6.079-.672 7.699-1.687"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GlobeIcon);
export default ForwardRef;