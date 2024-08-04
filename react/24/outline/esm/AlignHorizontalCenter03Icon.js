import * as React from "react";
function AlignHorizontalCenter03Icon({
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
    d: "M2.4 12h19.2M9.383 5.12 12 2.4m0 0 2.618 2.72M12.001 2.4v6.715m2.618 9.88-2.618 2.72m0 0-2.618-2.72M12 21.715V15"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AlignHorizontalCenter03Icon);
export default ForwardRef;