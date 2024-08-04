const React = require("react");
function Globe05Icon({
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
    d: "M13.25 20.717a9 9 0 1 1 6.68-9.841M3.125 15.374H5.75c1.036 0 1.875-.84 1.875-1.875v-2.437c0-1.036.84-1.876 1.875-1.876h1.875c1.036 0 1.875-.839 1.875-1.874V4.124m5.67 13.52 2.576-.89a.552.552 0 0 0 .025-1.034l-6.388-2.555a.552.552 0 0 0-.722.704l2.433 6.552a.552.552 0 0 0 1.034.001z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Globe05Icon);
module.exports = ForwardRef;