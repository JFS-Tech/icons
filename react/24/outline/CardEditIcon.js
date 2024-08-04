const React = require("react");
function CardEditIcon({
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
    d: "M1.501 15.66h-1zm0-9h1zm10.2 12.4a1 1 0 0 0 0-2zm-7.8-1v-1zm16.8-11.4h-1zm-18.6.8a1 1 0 1 0 0 2zm18 2a1 1 0 1 0 0-2zm-4.802 7.4-.707-.707a1 1 0 0 0-.293.707zm4.32-4.32.707-.707a1 1 0 0 0-1.414 0zm2.88 2.88.707.707a1 1 0 0 0 0-1.414zm-4.32 4.32v1a1 1 0 0 0 .707-.293zm-2.88 0h-1a1 1 0 0 0 1 1zM3.901 5.26H18.3v-2H3.9zm-1.4 10.4v-9h-2v9zm9.2 1.4H3.9v2h7.8zm8-10.4v2.4h2v-2.4zM3.9 3.26a3.4 3.4 0 0 0-3.4 3.4h2a1.4 1.4 0 0 1 1.4-1.4zm14.399 2a1.4 1.4 0 0 1 1.4 1.4h2a3.4 3.4 0 0 0-3.4-3.4zM.501 15.66a3.4 3.4 0 0 0 3.4 3.4v-2a1.4 1.4 0 0 1-1.4-1.4zm1.6-6.2h18v-2h-18zm13.905 8.107 4.32-4.32-1.414-1.414-4.32 4.32zm2.906-4.32 2.88 2.88 1.414-1.414-2.88-2.88zm2.88 1.466-4.32 4.32 1.414 1.414 4.32-4.32zM18.18 18.74H15.3v2h2.88zm-1.88 1v-2.88h-2v2.88z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CardEditIcon);
module.exports = ForwardRef;