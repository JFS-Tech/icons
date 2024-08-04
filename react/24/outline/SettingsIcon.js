const React = require("react");
function SettingsIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.676 4.316c-.427-1.755-2.925-1.755-3.352 0a1.723 1.723 0 0 1-2.572 1.067c-1.544-.94-3.31.826-2.37 2.37a1.725 1.725 0 0 1-1.065 2.572c-1.756.426-1.756 2.925 0 3.35a1.724 1.724 0 0 1 1.066 2.573c-.941 1.544.825 3.31 2.369 2.37a1.723 1.723 0 0 1 2.573 1.065c.426 1.756 2.925 1.756 3.35 0a1.723 1.723 0 0 1 2.573-1.065c1.544.94 3.31-.826 2.37-2.37a1.723 1.723 0 0 1 1.065-2.573c1.756-.426 1.756-2.925 0-3.35a1.723 1.723 0 0 1-1.065-2.573c.94-1.543-.826-3.31-2.37-2.37a1.724 1.724 0 0 1-2.573-1.065z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
  })));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SettingsIcon);
module.exports = ForwardRef;