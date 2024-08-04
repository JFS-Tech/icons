import * as React from "react";
function Upload04Icon({
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
    d: "M20 16.964v2.129q0 .378-.27.642a.9.9 0 0 1-.653.265H4.923a.9.9 0 0 1-.654-.265.87.87 0 0 1-.269-.642v-2.13q0-.377.27-.642a.9.9 0 0 1 .653-.264h3.42c.413 0 .765.278 1.044.586q.14.155.32.283.476.34 1.062.34h2.462q.586 0 1.062-.34.18-.128.32-.283c.28-.308.631-.586 1.045-.586h3.419q.384 0 .654.264.27.265.269.643Zm-3.25-8.9q-.164.38-.568.379h-2.461v4.233q0 .245-.183.425a.6.6 0 0 1-.433.18h-2.461a.6.6 0 0 1-.433-.18.58.58 0 0 1-.183-.425V8.443H7.567q-.404 0-.567-.378-.164-.369.134-.652l4.308-4.233q.173-.18.433-.18t.432.18l4.308 4.233q.299.283.135.652Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Upload04Icon);
export default ForwardRef;