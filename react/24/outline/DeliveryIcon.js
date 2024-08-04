const React = require("react");
function DeliveryIcon({
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
    d: "M9.207 16.455C9.207 17.86 8.095 19 6.724 19s-2.483-1.14-2.483-2.546m4.966 0c0-1.405-1.112-2.545-2.483-2.545s-2.483 1.14-2.483 2.545m4.966 0h5.586m-10.552 0H3V6a1 1 0 0 1 1-1h10.793v11.455m5.586 0c0 1.405-1.111 2.545-2.482 2.545s-2.483-1.14-2.483-2.546m4.965 0c0-1.405-1.111-2.545-2.482-2.545s-2.483 1.14-2.483 2.545m4.965 0H21v-5.09l-3.103-3.182h-3.104v8.272m.62 0h-.62"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DeliveryIcon);
module.exports = ForwardRef;