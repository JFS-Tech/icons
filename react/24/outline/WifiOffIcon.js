const React = require("react");
function WifiOffIcon({
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
    d: "M9.006 16.135c1.654-1.583 4.335-1.583 5.99 0M12 19l.017-.017M6.011 13.27a8.55 8.55 0 0 1 4.302-2.212m5.062.507c.95.394 1.839.962 2.615 1.705m-5.427-6.088c3.067.129 6.095 1.314 8.437 3.555m-18 0a12.7 12.7 0 0 1 3.74-2.482m10.323 9.76L4.688 5"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(WifiOffIcon);
module.exports = ForwardRef;