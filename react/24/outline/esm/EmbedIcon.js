import * as React from "react";
function EmbedIcon({
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
    d: "M5.676 16.121a1 1 0 1 0 1.397-1.431zM3 12.111l-.699-.715a1 1 0 0 0 0 1.431zm4.073-2.578a1 1 0 1 0-1.397-1.431zm11.25-1.431a1 1 0 1 0-1.396 1.43zM21 12.112l.698.715a1 1 0 0 0 0-1.431zm-4.073 2.578a1 1 0 1 0 1.397 1.431zm-7.5 3.047a1 1 0 0 0 1.929.527zM12 12.11l-.964-.266v.002zm2.65-5.845a1 1 0 0 0-1.928-.532zM7.073 14.69l-3.375-3.294-1.396 1.431 3.374 3.294zm-3.375-1.863 3.375-3.294-1.397-1.431-3.375 3.294zm13.229-3.294 3.375 3.294 1.396-1.431-3.374-3.294zm3.375 1.863-3.375 3.294 1.397 1.431 3.374-3.294zm-8.946 6.868 1.608-5.89-1.929-.527-1.608 5.89zm1.608-5.887 1.685-6.111-1.927-.532-1.686 6.11z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EmbedIcon);
export default ForwardRef;