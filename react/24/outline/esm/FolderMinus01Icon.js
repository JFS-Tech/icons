import * as React from "react";
function FolderMinus01Icon({
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
    d: "M12.103 19.941h-7.8a2.4 2.4 0 0 1-2.4-2.4V5.259a1.2 1.2 0 0 1 1.2-1.2h5.718l2.765 2.953h8.317a1.2 1.2 0 0 1 1.2 1.2V11.4m-5.794 5.194h6.788"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FolderMinus01Icon);
export default ForwardRef;