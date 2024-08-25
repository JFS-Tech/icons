const React = require("react");
function Bezier01Icon({
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
    d: "M4.51 9.78a7.39 7.39 0 0 1 5.493-5.102m-.527 14.286a7.4 7.4 0 0 1-4.967-4.966m14.15 0a7.4 7.4 0 0 1-4.966 4.966m-.527-14.286a7.39 7.39 0 0 1 5.629 5.63m-8.432-3.469h2.664c.49 0 .888-.397.888-.888V3.288a.89.89 0 0 0-.888-.888h-2.664a.89.89 0 0 0-.887.888V5.95c0 .49.397.888.887.888Zm0 14.76h2.664c.49 0 .888-.397.888-.887v-2.663a.89.89 0 0 0-.888-.888h-2.664a.89.89 0 0 0-.887.887v2.664c0 .49.397.888.887.888Zm5.744-10.931v2.663c0 .49.397.888.887.888h2.664c.49 0 .888-.397.888-.888v-2.663a.89.89 0 0 0-.888-.888h-2.664a.89.89 0 0 0-.887.888Zm-13.707 0v2.663c0 .49.398.888.888.888h2.664c.49 0 .887-.397.887-.888v-2.663a.89.89 0 0 0-.887-.888H3.288a.89.89 0 0 0-.888.888Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Bezier01Icon);
module.exports = ForwardRef;