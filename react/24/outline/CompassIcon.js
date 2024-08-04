const React = require("react");
function CompassIcon({
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
    d: "m3.584 21.6 7.364-12.888m2.63 0L20.416 21.6M4.363 14.76c1.928 2.903 4.753 4.735 7.9 4.735s5.973-1.832 7.9-4.734m-7.9-11.047a2.63 2.63 0 1 0 0 5.26 2.63 2.63 0 0 0 0-5.26m0 0V2.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CompassIcon);
module.exports = ForwardRef;