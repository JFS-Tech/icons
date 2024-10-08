import * as React from "react";
function FolderOpen01Icon({
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
    d: "M16.518 10.5h4.015c.59 0 1.067.477 1.067 1.067V18.1a2 2 0 0 1-2 2H4.8M2.4 4.967V18c0 1.16.94 2.1 2.1 2.1v0A2.1 2.1 0 0 0 6.6 18v-6.433c0-.59.477-1.067 1.067-1.067h11.8V7.978c0-.589-.478-1.066-1.067-1.066h-7.027l-1.63-2.524a1.07 1.07 0 0 0-.897-.488h-5.38c-.589 0-1.066.477-1.066 1.067"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderOpen01Icon);
export default ForwardRef;