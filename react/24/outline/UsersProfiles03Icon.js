const React = require("react");
function UsersProfiles03Icon({
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
    d: "M2.4 18.217c1.099-1.833 3.506-3.087 7.263-3.087s6.165 1.254 7.263 3.087m.695-4.476c1.99.994 2.984 1.989 3.979 3.978M15.552 6.138a2.983 2.983 0 0 1 .08 5.214m-2.985-2.585a2.984 2.984 0 1 1-5.968 0 2.984 2.984 0 0 1 5.968 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UsersProfiles03Icon);
module.exports = ForwardRef;