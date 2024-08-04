import * as React from "react";
function Edit01Icon({
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
    d: "m12.536 19.243.743-.832a2.062 2.062 0 0 1 3.279.266 2.062 2.062 0 0 0 3.117.428l1.346-1.208M2.979 19.47l4.366-.88a1.2 1.2 0 0 0 .611-.328l9.774-9.779a1.2 1.2 0 0 0 0-1.697l-2.071-2.068a1.2 1.2 0 0 0-1.697 0l-9.774 9.78a1.2 1.2 0 0 0-.328.611z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Edit01Icon);
export default ForwardRef;