import * as React from "react";
function Paperclip01Icon({
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
    d: "m17.51 8.133-7.1 7.1a2.162 2.162 0 1 1-3.053-3.062l5.506-5.473 1.383-1.383a4.308 4.308 0 1 1 6.092 6.092l-1.362 1.362-5.161 5.162c-2.67 2.781-6.716 3.204-9.544.489-2.794-2.683-2.32-6.704.504-9.529L9.916 3.75"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Paperclip01Icon);
export default ForwardRef;