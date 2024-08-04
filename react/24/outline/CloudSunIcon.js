const React = require("react");
function CloudSunIcon({
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
    d: "m8.392 10.958-.25.969a1 1 0 0 0 1.175-.59zm-4.472.01a1 1 0 0 0 1.84-.785zm2.816-5.117-.393-.92zm-1.155-.159a1 1 0 1 0 1.84-.785zm1.132-2.44a1 1 0 0 0-1.839.785zm2.303 1.637a1 1 0 0 0 1.857.745zm2.527-.925a1 1 0 0 0-1.856-.745zM2.794 6.163a1 1 0 0 0-.745 1.856zm.925 2.526a1 1 0 1 0 .745-1.856zm6.346-1.287a1 1 0 0 0 1.472-1.354zm10.535 6.15a5.857 5.857 0 0 1-5.857 5.857v2a7.857 7.857 0 0 0 7.857-7.857zm-5.857-5.857a5.857 5.857 0 0 1 5.857 5.857h2a7.857 7.857 0 0 0-7.857-7.857zm-5.426 3.642a5.86 5.86 0 0 1 5.426-3.642v-2a7.86 7.86 0 0 0-7.277 4.885zm-2.117.472q.494.001.943.118L8.64 9.99A5.8 5.8 0 0 0 7.2 9.809zm-3.8 3.8a3.8 3.8 0 0 1 3.8-3.8v-2a5.8 5.8 0 0 0-5.8 5.8zm3.8 3.8a3.8 3.8 0 0 1-3.8-3.8h-2a5.8 5.8 0 0 0 5.8 5.8zm7.543 0H7.2v2h7.543zm-8.984-9.226a2.6 2.6 0 0 1 1.37-3.412l-.785-1.84A4.6 4.6 0 0 0 3.92 10.97zM7.42 4.907 6.713 3.25l-1.839.786.707 1.655zm3.453.727.67-1.67-1.856-.745-.67 1.67zM2.049 8.02l1.67.67.745-1.856-1.67-.67zm5.08-1.248a2.6 2.6 0 0 1 2.936.63l1.472-1.353a4.6 4.6 0 0 0-5.194-1.116z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CloudSunIcon);
module.exports = ForwardRef;