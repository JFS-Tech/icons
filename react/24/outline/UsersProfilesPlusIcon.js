const React = require("react");
function UsersProfilesPlusIcon({
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
    d: "M1.4 21.6a1 1 0 1 0 2 0zm1-3.6h1zm10.2-2.6a1 1 0 1 0 0-2zm9 1.2a1 1 0 1 0 0-2zm-5.4-2a1 1 0 1 0 0 2zm1.7 3.7a1 1 0 1 0 2 0zm2-5.4a1 1 0 1 0-2 0zM17.889 1.528a1 1 0 0 0-.978 1.744zm-.978 7.2a1 1 0 1 0 .978 1.744zM13.4 6a2.6 2.6 0 0 1-2.6 2.6v2A4.6 4.6 0 0 0 15.4 6zm-2.6 2.6A2.6 2.6 0 0 1 8.2 6h-2a4.6 4.6 0 0 0 4.6 4.6zM8.2 6a2.6 2.6 0 0 1 2.6-2.6v-2A4.6 4.6 0 0 0 6.2 6zm2.6-2.6A2.6 2.6 0 0 1 13.4 6h2a4.6 4.6 0 0 0-4.6-4.6zM3.4 21.6V18h-2v3.6zM6 13.4A4.6 4.6 0 0 0 1.4 18h2A2.6 2.6 0 0 1 6 15.4zm0 2h6.6v-2H6zm15.6-.8h-2.7v2h2.7zm-2.7 0h-2.7v2h2.7zm1 3.7v-2.7h-2v2.7zm0-2.7v-2.7h-2v2.7zM16.91 3.272C18.15 3.966 18.8 4.986 18.8 6h2c0-1.936-1.236-3.533-2.911-4.472zM18.8 6c0 1.014-.651 2.034-1.89 2.728l.979 1.744c1.675-.938 2.91-2.536 2.91-4.472z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UsersProfilesPlusIcon);
module.exports = ForwardRef;