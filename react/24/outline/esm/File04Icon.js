import * as React from "react";
function File04Icon({
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
    d: "M15 2.4V6a1.2 1.2 0 0 0 1.2 1.2h3.6m-1.8-3a27 27 0 0 1-1.438-1.413 1.23 1.23 0 0 0-.893-.387H6.6a2.4 2.4 0 0 0-2.4 2.4v14.4a2.4 2.4 0 0 0 2.4 2.4h10.8a2.4 2.4 0 0 0 2.4-2.4L19.8 6.478c0-.307-.117-.602-.33-.823-.394-.408-1.051-1.08-1.47-1.455"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(File04Icon);
export default ForwardRef;