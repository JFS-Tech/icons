const React = require("react");
function AudioSettings02Icon({
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
    d: "M6.126 9.913H17.72c2.057 0 3.726-1.682 3.726-3.757 0-2.074-1.669-3.756-3.727-3.756H6.126m0 7.513C4.068 9.913 2.4 8.231 2.4 6.157 2.4 4.082 4.068 2.4 6.126 2.4m0 7.513c2.058 0 3.726-1.682 3.726-3.756 0-2.075-1.668-3.757-3.726-3.757m11.748 11.687H6.126c-2.058 0-3.726 1.682-3.726 3.756 0 2.075 1.668 3.757 3.726 3.757h11.748m0-7.513c2.058 0 3.726 1.682 3.726 3.756 0 2.075-1.668 3.757-3.726 3.757m0-7.513c-2.058 0-3.726 1.682-3.726 3.756 0 2.075 1.668 3.757 3.726 3.757"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(AudioSettings02Icon);
module.exports = ForwardRef;