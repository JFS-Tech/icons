const React = require("react");
function PenTool04Icon({
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
    d: "M6.144 11.454a1 1 0 1 0 1.885.668zM9.12 6.057l-.943-.334zM10.49 4.87l-.196-.98zm11.971-2.394.985.177a1 1 0 0 0-1.18-1.158zM20.278 14.59l-.984-.177zm-1.26 1.428-.299-.954zm-6.166.88a1 1 0 0 0 .596 1.908zM22.953 3.398a1 1 0 0 0-1.414-1.414zm-6.612 3.784a1 1 0 0 0 1.414 1.414zm-12.72 8.936-.707.707zm0-1.732.707.707zm6.93 6.93.707.707zm-1.732 0 .707-.707zm3.898-3.898-.707.707zm0 1.732-.707-.707zm-5.198-6.93.708-.707zm-1.732 0-.707-.707zm2.242-.099 2.033-5.73-1.885-.67-2.033 5.732zm2.658-6.272L22.66 3.456l-.393-1.961-11.97 2.394zm10.791-3.552-2.184 12.115 1.968.355 2.185-12.115zM18.72 15.064l-5.867 1.833.596 1.91 5.868-1.834zm.575-.651a.84.84 0 0 1-.575.65l.597 1.91a2.84 2.84 0 0 0 1.946-2.205zm-9.232-8.021a.84.84 0 0 1 .625-.542l-.392-1.96a2.84 2.84 0 0 0-2.118 1.833zM21.54 1.985 16.34 7.183l1.414 1.414 5.198-5.198zM6.812 12.928l5.198 5.198 1.414-1.415-5.197-5.197zm5.198 5.516L9.844 20.61l1.415 1.414 2.165-2.166zM9.526 20.61l-5.198-5.198-1.414 1.414 5.198 5.198zm-5.198-5.516 2.166-2.166-1.414-1.414-2.166 2.166zm0 .318a.225.225 0 0 1 0-.318L2.914 13.68a2.225 2.225 0 0 0 0 3.146zm5.516 5.198a.225.225 0 0 1-.318 0l-1.414 1.414a2.225 2.225 0 0 0 3.146 0zm2.166-2.484a.225.225 0 0 1 0 .318l1.414 1.414a2.225 2.225 0 0 0 0-3.146zm-3.783-6.612a2.225 2.225 0 0 0-3.147 0l1.414 1.414a.225.225 0 0 1 .318 0zm7.681-.433a1.45 1.45 0 0 1-2.05 0l-1.415 1.414a3.45 3.45 0 0 0 4.88 0zm-2.05 0a1.45 1.45 0 0 1 0-2.051l-1.415-1.414a3.45 3.45 0 0 0 0 4.879zm0-2.051a1.45 1.45 0 0 1 2.05 0l1.414-1.414a3.45 3.45 0 0 0-4.879 0zm2.05 0a1.45 1.45 0 0 1 0 2.05l1.414 1.415a3.45 3.45 0 0 0 0-4.88z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PenTool04Icon);
module.exports = ForwardRef;