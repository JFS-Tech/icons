const React = require("react");
function Calendar02Icon({
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
    d: "M7.75 17.22v-.077m4.5.077v-.077m0-4.114v-.078m4 .078v-.078M4.75 8.914h14M6.56 3v1.543M16.75 3v1.543m0 0h-10c-1.657 0-3 1.381-3 3.086v10.285c0 1.704 1.343 3.086 3 3.086h10c1.657 0 3-1.381 3-3.086V7.63c0-1.705-1.343-3.086-3-3.086"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Calendar02Icon);
module.exports = ForwardRef;