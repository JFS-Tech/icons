const React = require("react");
function Send03Icon({
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
    d: "M8.4 11.83h2.116M4.8 21.6a2.4 2.4 0 0 1-2.4-2.4V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4a2.4 2.4 0 0 1 2.4 2.4v14.4a2.4 2.4 0 0 1-2.4 2.4zm3.6-6.358V8.259c0-.788.831-1.3 1.535-.944l6.284 3.174c.741.374.782 1.418.071 1.849l-6.284 3.808a1.058 1.058 0 0 1-1.606-.904Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Send03Icon);
module.exports = ForwardRef;