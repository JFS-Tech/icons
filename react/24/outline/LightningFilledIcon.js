const React = require("react");
function LightningFilledIcon({
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
    d: "m5.289 13.632 6.99-10.983c.268-.422.921-.232.921.268V10.7a.1.1 0 0 0 .1.1h4.94a.5.5 0 0 1 .41.787L11.71 21.5a.5.5 0 0 1-.91-.287V14.5a.1.1 0 0 0-.1-.1H5.71a.5.5 0 0 1-.421-.768Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(LightningFilledIcon);
module.exports = ForwardRef;