import * as React from "react";
function PenTool01Icon({
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
    d: "M19.582 13.898a1 1 0 0 0-1.885-.67zm-2.976 5.396.943.334zm-1.371 1.187.196.98zM3.264 22.876l-.984-.178a1 1 0 0 0 1.18 1.158zM5.448 10.76l.984.177zm1.26-1.428.299.954zm6.166-.88a1 1 0 0 0-.596-1.908zm-10.1 13.499a1 1 0 1 0 1.413 1.414zm6.61-3.783a1 1 0 1 0-1.413-1.415zm12.72-8.937.708-.707zm0 1.733.708.707zm-6.93-6.93-.706-.708zm1.733 0-.707.706zM13.01 7.932l-.707.707zm0-1.733.707.707zm5.198 6.93.707-.707zm1.732 0-.707-.707zM2.844 6.6a1 1 0 1 0 2 0zm2-5.288a1 1 0 1 0-2 0zM1.2 2.956a1 1 0 0 0 0 2zm5.288 2a1 1 0 1 0 0-2zm11.21 8.273-2.034 5.73 1.885.67 2.033-5.731zm-2.66 6.272-11.97 2.394.392 1.961 11.971-2.394zm-10.79 3.552 2.184-12.115-1.968-.355L2.28 22.698zm2.759-12.766 5.867-1.833-.596-1.91L6.41 8.379zm-.575.651a.84.84 0 0 1 .575-.65l-.597-1.91a2.84 2.84 0 0 0-1.946 2.205zm9.232 8.021a.84.84 0 0 1-.625.542l.392 1.96a2.84 2.84 0 0 0 2.118-1.833zM4.187 23.367l5.198-5.197-1.414-1.415-5.198 5.198zm14.727-10.943-5.198-5.198-1.414 1.415 5.198 5.197zm-5.198-5.516 2.166-2.166-1.414-1.414-2.166 2.166zM16.2 4.741l5.198 5.198 1.414-1.414-5.198-5.198zm5.198 5.516-2.166 2.166 1.414 1.414 2.166-2.165zm0-.318a.225.225 0 0 1 0 .318l1.414 1.415a2.225 2.225 0 0 0 0-3.147zm-5.516-5.198a.225.225 0 0 1 .318 0l1.414-1.414a2.225 2.225 0 0 0-3.146 0zm-2.166 2.484a.225.225 0 0 1 0-.318l-1.414-1.414a2.225 2.225 0 0 0 0 3.147zm3.784 6.612a2.225 2.225 0 0 0 3.146 0l-1.414-1.414a.225.225 0 0 1-.318 0zm-7.682.433a1.45 1.45 0 0 1 2.05 0l1.415-1.414a3.45 3.45 0 0 0-4.88 0zm2.05 0a1.45 1.45 0 0 1 0 2.051l1.415 1.414a3.45 3.45 0 0 0 0-4.879zm0 2.051a1.45 1.45 0 0 1-2.05 0l-1.414 1.414a3.45 3.45 0 0 0 4.879 0zm-2.05 0a1.45 1.45 0 0 1 0-2.05l-1.414-1.415a3.45 3.45 0 0 0 0 4.88zm-4.974-9.72V3.955h-2V6.6zm0-2.645V1.312h-2v2.644zm-3.644 1h2.644v-2H1.2zm2.644 0h2.644v-2H3.844z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PenTool01Icon);
export default ForwardRef;