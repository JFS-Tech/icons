const React = require("react");
function Data04Icon({
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
    d: "M12 17.4v-6m7.68 6.36a1.92 1.92 0 1 0 0 3.84 1.92 1.92 0 0 0 0-3.84Zm0 0v-5.52a.96.96 0 0 0-.96-.96H5.28a.96.96 0 0 0-.96.96v5.52m0 0a1.92 1.92 0 1 0 0 3.84 1.92 1.92 0 0 0 0-3.84ZM12 21.6a1.92 1.92 0 1 1 0-3.84 1.92 1.92 0 0 1 0 3.84ZM6 7.2h12A1.2 1.2 0 0 0 19.2 6V3.6A1.2 1.2 0 0 0 18 2.4H6a1.2 1.2 0 0 0-1.2 1.2V6A1.2 1.2 0 0 0 6 7.2Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(Data04Icon);
module.exports = ForwardRef;