const React = require("react");
function UserProfile02Icon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.4 20.512c0-3.775 3.154-6.836 9.6-6.836s9.6 3.06 9.6 6.836c0 .601-.438 1.088-.979 1.088H3.38c-.54 0-.98-.487-.98-1.088ZM15.6 6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserProfile02Icon);
module.exports = ForwardRef;