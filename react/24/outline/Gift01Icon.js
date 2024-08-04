const React = require("react");
function Gift01Icon({
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
    d: "M12.174 21.654V7.69m-1.624-.838a.52.52 0 0 0 .479-.133.52.52 0 0 0 .133-.48c-.155-.633-.727-2.756-1.313-3.342a1.877 1.877 0 0 0-2.65-.007 1.877 1.877 0 0 0 .008 2.649c.596.596 2.709 1.158 3.343 1.313m1.774-.613a.52.52 0 0 0 .133.48.52.52 0 0 0 .48.133c.633-.155 2.756-.727 3.343-1.313a1.877 1.877 0 0 0 .006-2.65 1.877 1.877 0 0 0-2.648.008c-.597.596-1.159 2.709-1.314 3.342m-9.226 6.338h17.804a.7.7 0 0 0 .698-.698v-3.49a.7.7 0 0 0-.698-.7H3.098a.7.7 0 0 0-.698.7v3.49c0 .386.312.698.698.698m16.756 0v8.378a.7.7 0 0 1-.698.699H4.844a.7.7 0 0 1-.699-.699v-8.378z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Gift01Icon);
module.exports = ForwardRef;