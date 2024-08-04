const React = require("react");
function EditContainedIcon({
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
    d: "M11.098 3.804H5.412A3.41 3.41 0 0 0 2 7.215v11.373A3.41 3.41 0 0 0 5.412 22h11.373a3.41 3.41 0 0 0 3.412-3.412v-5.686m-12.51 3.412 4.137-.834c.22-.044.422-.153.58-.311L21.667 5.9a1.137 1.137 0 0 0 0-1.608l-1.963-1.96a1.137 1.137 0 0 0-1.608 0l-9.264 9.27c-.158.157-.266.358-.31.578z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EditContainedIcon);
module.exports = ForwardRef;