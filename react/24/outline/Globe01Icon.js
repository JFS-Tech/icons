const React = require("react");
function Globe01Icon({
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
    d: "m3.522 17.4 1.166-1.247c1.673 1.694 3.996 2.354 6.564 2.354a9.226 9.226 0 0 0 6.564-15.71l1.166-.997M11.75 18.507V22.2m0 0H6.265m5.486 0h5.236M16.722 9a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Globe01Icon);
module.exports = ForwardRef;