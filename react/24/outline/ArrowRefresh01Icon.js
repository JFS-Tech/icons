const React = require("react");
function ArrowRefresh01Icon({
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
    d: "M5.578 7.25C6.968 4.71 9.566 3 12.54 3c3.374 0 6.262 2.197 7.455 5.313m-11.977 0H4v-4.25M19.422 15.75C18.032 18.29 15.434 20 12.46 20c-3.374 0-6.262-2.197-7.455-5.312m11.977 0H21v4.25"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowRefresh01Icon);
module.exports = ForwardRef;