const React = require("react");
function Watch01Icon({
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
    d: "m8 16.67 1.024 3.99c.051.2.228.34.43.34h4.887a.45.45 0 0 0 .424-.319L16 16.672m0-9.342-1.024-3.99a.45.45 0 0 0-.43-.339H9.66a.45.45 0 0 0-.424.318L8 7.33m10 4.557c0 3.398-2.686 6.152-6 6.152s-6-2.754-6-6.152 2.686-6.152 6-6.152 6 2.754 6 6.152Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Watch01Icon);
module.exports = ForwardRef;