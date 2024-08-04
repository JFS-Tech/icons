const React = require("react");
function FileCodeIcon({
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
    d: "m15.103 3.103.707-.707zm3.394 3.394-.707.707zm-8.804 10.21a1 1 0 0 0 1.414-1.414zM8.4 14l-.707-.707a1 1 0 0 0 0 1.414zm2.707-1.293a1 1 0 0 0-1.414-1.414zm3.2-1.414a1 1 0 0 0-1.414 1.414zM15.6 14l.707.707a1 1 0 0 0 0-1.414zm-2.707 1.293a1 1 0 0 0 1.414 1.414zM16.8 20.6H7.2v2h9.6zm-11-1.4V4.8h-2v14.4zM7.2 3.4h6.206v-2H7.2zm11 4.794V19.2h2V8.194zM13.406 3.4a1.4 1.4 0 0 1 .99.41l1.414-1.414a3.4 3.4 0 0 0-2.404-.996zM7.2 20.6a1.4 1.4 0 0 1-1.4-1.4h-2a3.4 3.4 0 0 0 3.4 3.4zm9.6 2a3.4 3.4 0 0 0 3.4-3.4h-2a1.4 1.4 0 0 1-1.4 1.4zm.99-15.396a1.4 1.4 0 0 1 .41.99h2a3.4 3.4 0 0 0-.996-2.404zM5.8 4.8a1.4 1.4 0 0 1 1.4-1.4v-2a3.4 3.4 0 0 0-3.4 3.4zm6.4-2.4v4.8h2V2.4zm2.2 7h4.8v-2h-4.8zm-2.2-2.2a2.2 2.2 0 0 0 2.2 2.2v-2a.2.2 0 0 1-.2-.2zm2.196-3.39 3.394 3.394 1.414-1.414-3.394-3.394zm-3.289 11.483-2-2-1.414 1.414 2 2zm-2-.586 2-2-1.414-1.414-2 2zm3.786-2 2 2 1.414-1.414-2-2zm2 .586-2 2 1.414 1.414 2-2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileCodeIcon);
module.exports = ForwardRef;