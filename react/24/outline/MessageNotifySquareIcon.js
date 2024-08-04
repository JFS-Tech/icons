const React = require("react");
function MessageNotifySquareIcon({
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
    d: "M11.687 17.191v-1a1 1 0 0 0-.707.293zM6.678 22.2h-1a1 1 0 0 0 1.707.707zm0-5.009h1a1 1 0 0 0-1-1zM10.8 4a1 1 0 1 0 0-2zm11.8 8a1 1 0 1 0-2 0zm-11.62 4.484L5.97 21.493l1.414 1.414 5.009-5.009zM7.678 22.2v-5.009h-2V22.2zm-1-6.009H4.8v2h1.878zm-3.278-1.4V5.4h-2v9.391zm15.8 1.4h-7.513v2H19.2zM4.8 4h6V2h-6zm15.8 8v2.791h2V12zm-1.4 6.191a3.4 3.4 0 0 0 3.4-3.4h-2a1.4 1.4 0 0 1-1.4 1.4zM3.4 5.4A1.4 1.4 0 0 1 4.8 4V2a3.4 3.4 0 0 0-3.4 3.4zm1.4 10.791a1.4 1.4 0 0 1-1.4-1.4h-2a3.4 3.4 0 0 0 3.4 3.4zM20.6 5.4A2.6 2.6 0 0 1 18 8v2a4.6 4.6 0 0 0 4.6-4.6zM18 8a2.6 2.6 0 0 1-2.6-2.6h-2A4.6 4.6 0 0 0 18 10zm-2.6-2.6A2.6 2.6 0 0 1 18 2.8v-2a4.6 4.6 0 0 0-4.6 4.6zM18 2.8a2.6 2.6 0 0 1 2.6 2.6h2A4.6 4.6 0 0 0 18 .8z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(MessageNotifySquareIcon);
module.exports = ForwardRef;