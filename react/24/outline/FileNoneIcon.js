const React = require("react");
function FileNoneIcon({
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
    d: "M15 2.4V6a1.2 1.2 0 0 0 1.2 1.2h3.6M15 2.4h.67c.338 0 .66.142.892.387.35.368.904.935 1.438 1.413.419.374 1.076 1.047 1.47 1.455.213.221.33.516.33.823V7.2M15 2.4H6m13.8 4.8V21M4.2 8.4v10.8a2.4 2.4 0 0 0 2.4 2.4h7.8m6 1.2L3.6 1.2"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileNoneIcon);
module.exports = ForwardRef;