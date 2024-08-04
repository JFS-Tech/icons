import * as React from "react";
function Star01Icon({
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
    strokeLinejoin: "round",
    d: "M10.89 3.172c.382-1.03 1.838-1.03 2.219 0l1.896 5.124c.12.324.375.579.699.699l5.124 1.896c1.03.38 1.03 1.837 0 2.218l-5.124 1.896c-.324.12-.58.375-.699.699l-1.896 5.124c-.381 1.03-1.837 1.03-2.218 0l-1.896-5.124a1.18 1.18 0 0 0-.699-.699l-5.124-1.896c-1.03-.381-1.03-1.837 0-2.218l5.124-1.896c.324-.12.579-.375.699-.699z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Star01Icon);
export default ForwardRef;