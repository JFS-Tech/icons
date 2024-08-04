const React = require("react");
function NotificationBubbleIcon({
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
    d: "M13.105 4.051Q12.607 4 12.093 4C7.623 4 4 6.95 4 10.588s3.623 6.589 8.093 6.589c.699 0 1.377-.073 2.023-.208L17.151 20v-4.235C18.514 14.843 19.61 13.459 20 12m0-4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(NotificationBubbleIcon);
module.exports = ForwardRef;