const React = require("react");
function Home02Icon({
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
    d: "M7.5 17.063h9M11.305 3.21l-7.8 5.275c-.317.214-.505.56-.505.93v9.872C3 20.234 3.806 21 4.8 21h14.4c.994 0 1.8-.766 1.8-1.712V9.416c0-.37-.188-.716-.505-.93l-7.8-5.275a1.25 1.25 0 0 0-1.39 0"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Home02Icon);
module.exports = ForwardRef;