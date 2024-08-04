const React = require("react");
function Hourglass02Icon({
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
    d: "M9.824 17.914h4.852M17.229 21H7.27c-.564 0-1.021-.46-1.021-1.029v-2.747c0-.22.07-.434.2-.61l2.928-4.004a1.03 1.03 0 0 0 0-1.22L6.45 7.386c-.13-.176-.199-.39-.199-.61V4.03C6.25 3.46 6.707 3 7.271 3h9.702c.564 0 1.022.46 1.022 1.029v2.767c0 .207-.062.41-.179.58l-2.73 4.021c-.246.361-.238.839.02 1.191l2.945 4.026c.13.176.199.39.199.61v2.747c0 .569-.457 1.029-1.021 1.029"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Hourglass02Icon);
module.exports = ForwardRef;