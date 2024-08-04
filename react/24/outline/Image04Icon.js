const React = require("react");
function Image04Icon({
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
    fill: "#000",
    d: "M5.105 16.918a1 1 0 1 0 1.415 1.414zm3.52-2.105.707-.708a1 1 0 0 0-1.414 0zm2.25 2.25-.707.707a1 1 0 0 0 1.414 0zM15.938 12l.707-.707a1 1 0 0 0-1.415 0zm3.23 4.645a1 1 0 0 0 1.414-1.415zM6.52 18.332l2.812-2.812-1.414-1.415-2.813 2.813zm1.398-2.812 2.25 2.25 1.414-1.415-2.25-2.25zm3.664 2.25 5.063-5.063-1.415-1.414-5.062 5.062zm3.648-5.063 3.938 3.938 1.414-1.415-3.937-3.937zM12 20a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm8-8a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10zm0-2C6.477 2 2 6.477 2 12h2a8 8 0 0 1 8-8zM9.875 9.188c0 .38-.308.687-.687.687v2a2.687 2.687 0 0 0 2.687-2.687zm-.687.687a.687.687 0 0 1-.688-.687h-2a2.687 2.687 0 0 0 2.688 2.687zM8.5 9.188c0-.38.308-.688.688-.688v-2A2.687 2.687 0 0 0 6.5 9.188zm.688-.688c.38 0 .687.308.687.688h2A2.687 2.687 0 0 0 9.188 6.5z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Image04Icon);
module.exports = ForwardRef;