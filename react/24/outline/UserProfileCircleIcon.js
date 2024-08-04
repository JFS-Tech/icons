const React = require("react");
function UserProfileCircleIcon({
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
    d: "M5.4 19.2c.461-.517 2.62-2.893 3.254-2.893h6.692c.918 0 2.79 1.97 3.254 2.664m3-6.971a9.6 9.6 0 0 1-9.6 9.6 9.6 9.6 0 1 1 9.6-9.6Zm-6.161-3.272C15.439 6.896 13.893 5.4 12 5.4c-1.892 0-3.438 1.496-3.438 3.328s1.546 3.328 3.438 3.328 3.439-1.496 3.439-3.328Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserProfileCircleIcon);
module.exports = ForwardRef;