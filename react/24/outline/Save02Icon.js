const React = require("react");
function Save02Icon({
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
    d: "M6.938 19.875v-5.062c0-.622.503-1.126 1.125-1.126h7.874c.622 0 1.126.504 1.126 1.126v5.624m0-16.312v2.25c0 .621-.504 1.125-1.125 1.125H8.061a1.125 1.125 0 0 1-1.124-1.125V3m13.497 3.935-3.37-3.37A1.93 1.93 0 0 0 15.7 3H4.93A1.93 1.93 0 0 0 3 4.929V19.07C3 20.137 3.863 21 4.929 21H19.07A1.93 1.93 0 0 0 21 19.071V8.3c0-.512-.203-1.002-.565-1.364Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Save02Icon);
module.exports = ForwardRef;