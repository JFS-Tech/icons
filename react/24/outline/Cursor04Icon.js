const React = require("react");
function Cursor04Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 25",
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
    d: "m5.473 14.248-1.687 1.687M3.61 9.748H1.224m2.562-6.185L5.473 5.25M9.973 1v2.386m6.185.177L14.472 5.25m7.353 14.216-1.862 1.862a.527.527 0 0 1-.745 0l-2.935-2.936a.527.527 0 0 0-.784.044l-1.974 2.468a.527.527 0 0 1-.918-.185L9.422 9.577a.527.527 0 0 1 .652-.65l11.141 3.183c.412.117.519.65.185.917l-2.468 1.975a.527.527 0 0 0-.044.783l2.936 2.936a.527.527 0 0 1 0 .745"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Cursor04Icon);
module.exports = ForwardRef;