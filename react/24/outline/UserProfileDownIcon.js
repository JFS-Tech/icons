const React = require("react");
function UserProfileDownIcon({
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
    d: "M2.4 21.6V18A3.6 3.6 0 0 1 6 14.4h7.2m8.4 2.229L19.2 19.2m0 0-2.4-2.571m2.4 2.571v-6.6M14.4 6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserProfileDownIcon);
module.exports = ForwardRef;