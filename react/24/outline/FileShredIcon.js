const React = require("react");
function FileShredIcon({
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
    d: "m16.562 2.787-.725.69zM18 4.2l.667-.745zm1.47 1.455-.72.694zm.33.823h-1zM4.2 4.8h-1zM2.4 14a1 1 0 1 0 0 2zm19.2 2a1 1 0 1 0 0-2zM3.2 10.2a1 1 0 1 0 2 0zm15.6 0a1 1 0 1 0 2 0zm-13.6 9a1 1 0 1 0-2 0zm-2 2.4a1 1 0 1 0 2 0zm10.4-2.4a1 1 0 1 0-2 0zm-2 2.4a1 1 0 1 0 2 0zM22 19.2a1 1 0 1 0-2 0zm-2 2.4a1 1 0 1 0 2 0zM9.4 19.2a1 1 0 1 0-2 0zm-2 1.2a1 1 0 1 0 2 0zm10.4-1.2a1 1 0 1 0-2 0zm-2 1.2a1 1 0 1 0 2 0zm-9.2-17H15v-2H6.6zm8.4 0h.67v-2H15zm.837.076c.356.375.932.964 1.497 1.47l1.333-1.491a26 26 0 0 1-1.38-1.357zm1.497 1.47c.386.345 1.018.99 1.416 1.403l1.44-1.388c-.39-.404-1.072-1.103-1.523-1.506zM20.8 6.477c0-.562-.214-1.107-.61-1.517l-1.44 1.388c.03.031.05.076.05.129zM15.67 3.4c.055 0 .117.023.167.076l1.45-1.378A2.23 2.23 0 0 0 15.67 1.4zm-9.07-2a3.4 3.4 0 0 0-3.4 3.4h2a1.4 1.4 0 0 1 1.4-1.4zm7.4 1V6h2V2.4zm2.2 5.8h3.6v-2h-3.6zM14 6a2.2 2.2 0 0 0 2.2 2.2v-2A.2.2 0 0 1 16 6zM2.4 16h19.2v-2H2.4zm.8-11.2v5.4h2V4.8zm15.6 1.678V7.2h2v-.722zm0 .722v3h2v-3zm-15.6 12v2.4h2v-2.4zm8.4 0v2.4h2v-2.4zm8.4 0v2.4h2v-2.4zm-12.6 0v1.2h2v-1.2zm8.4 0v1.2h2v-1.2z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(FileShredIcon);
module.exports = ForwardRef;