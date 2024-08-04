const React = require("react");
function Wind01Icon({
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
    d: "M9.021 4.796c.36-.91 1.222-1.551 2.228-1.551 1.33 0 2.408 1.12 2.408 2.501 0 1.382-1.078 2.502-2.408 2.502h-8.85m11.625 10.955c.36.911 1.222 1.552 2.228 1.552 1.33 0 2.408-1.12 2.408-2.501 0-1.382-1.078-2.502-2.408-2.502h-8.85m9.381-7.203a2.502 2.502 0 1 1 2.315 3.45H4.901"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Wind01Icon);
module.exports = ForwardRef;