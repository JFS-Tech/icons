import * as React from "react";
function PenTool02Icon({
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
    d: "M19.581 12.698a1 1 0 1 0-1.885-.67zm-2.976 5.396.943.334zm-1.371 1.187.196.98zM3.262 21.676l-.984-.178a1 1 0 0 0 1.18 1.158zM5.447 9.56l.984.177zm1.26-1.428.299.954zm6.166-.88a1 1 0 1 0-.596-1.908zM2.772 20.753a1 1 0 1 0 1.414 1.414zm6.612-3.783a1 1 0 0 0-1.415-1.415zm12.72-8.937.707-.707zm0 1.732-.707-.707zm-6.93-6.93-.708-.707zm1.732 0-.707.708zm-3.898 3.899.707-.708zm0-1.733.707.707zm5.198 6.93-.708.707zm1.732 0 .707.707zM1.2 1.756a1 1 0 0 0 0 2zm5.288 2a1 1 0 1 0 0-2zm11.208 8.273-2.033 5.73 1.885.67 2.033-5.731zM15.038 18.3 3.066 20.695l.393 1.961 11.97-2.394zM4.247 21.853 6.43 9.738l-1.968-.355-2.185 12.115zM7.006 9.087l5.867-1.833-.596-1.909-5.868 1.834zm-.575.651a.84.84 0 0 1 .575-.65l-.597-1.91a2.84 2.84 0 0 0-1.946 2.205zm9.232 8.022a.84.84 0 0 1-.625.54l.392 1.962a2.84 2.84 0 0 0 2.118-1.834zM4.186 22.165l5.198-5.197-1.415-1.415-5.197 5.198zm14.727-10.943-5.198-5.198-1.414 1.415 5.197 5.197zm-5.198-5.516 2.166-2.165-1.415-1.415-2.165 2.166zm2.484-2.165 5.197 5.197 1.415-1.414-5.198-5.198zm5.197 5.515-2.165 2.166 1.414 1.414 2.166-2.165zm0-.318a.225.225 0 0 1 0 .318l1.415 1.415a2.225 2.225 0 0 0 0-3.147zm-5.515-5.197a.225.225 0 0 1 .318 0l1.414-1.415a2.225 2.225 0 0 0-3.147 0zm-2.166 2.483a.225.225 0 0 1 0-.318l-1.414-1.414a2.225 2.225 0 0 0 0 3.147zm3.783 6.612a2.225 2.225 0 0 0 3.147 0l-1.414-1.414a.225.225 0 0 1-.318 0zm-7.681.433a1.45 1.45 0 0 1 2.05 0l1.415-1.414a3.45 3.45 0 0 0-4.88 0zm2.05 0a1.45 1.45 0 0 1 0 2.051l1.415 1.414a3.45 3.45 0 0 0 0-4.879zm0 2.051a1.45 1.45 0 0 1-2.05 0l-1.414 1.414a3.45 3.45 0 0 0 4.879 0zm-2.05 0a1.45 1.45 0 0 1 0-2.05l-1.414-1.415a3.45 3.45 0 0 0 0 4.88zM1.2 3.756h5.288v-2H1.2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PenTool02Icon);
export default ForwardRef;