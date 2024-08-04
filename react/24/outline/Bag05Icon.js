const React = require("react");
function Bag05Icon({
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
    d: "M21.6 6.3H2.4h0m19.2 0v13.316c0 1.262-1.042 2.284-2.328 2.284H4.727c-1.285 0-2.327-1.022-2.327-2.284V6.3m19.2 0-3.849-3.848a1.2 1.2 0 0 0-.848-.352H7.097a1.2 1.2 0 0 0-.849.352L2.4 6.3m13.2 3.6a3.6 3.6 0 0 1-7.2 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Bag05Icon);
module.exports = ForwardRef;