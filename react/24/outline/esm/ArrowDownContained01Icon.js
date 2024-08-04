import * as React from "react";
function ArrowDownContained01Icon({
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
    fill: "#000",
    d: "M16.817 11.643a1 1 0 1 0-1.28-1.537zM12.2 14.189l-.64.768a1 1 0 0 0 1.28 0zm-3.338-4.083a1 1 0 0 0-1.28 1.537zm6.675 0-3.978 3.315 1.28 1.536 3.978-3.314zm-2.697 3.315-3.978-3.315-1.28 1.537 3.977 3.314zM20 12a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowDownContained01Icon);
export default ForwardRef;