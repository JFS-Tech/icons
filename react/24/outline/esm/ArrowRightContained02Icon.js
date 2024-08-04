import * as React from "react";
function ArrowRightContained02Icon({
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
    d: "M13.431 7.382a1 1 0 0 0-1.536 1.28zM15.978 12l.768.64a1 1 0 0 0 0-1.28zm-4.083 3.337a1 1 0 0 0 1.536 1.28zM8.023 11a1 1 0 1 0 0 2zm3.872-2.337 3.314 3.977 1.537-1.28-3.315-3.978zm3.314 2.697-3.314 3.977 1.536 1.28 3.315-3.977zm.768-.36H8.023v2h7.954zm1.68-4.657a8 8 0 0 1 0 11.314l1.414 1.414c3.905-3.905 3.905-10.237 0-14.142zm0 11.314a8 8 0 0 1-11.314 0L4.93 19.07c3.905 3.905 10.237 3.905 14.142 0zm-11.314 0a8 8 0 0 1 0-11.314L4.93 4.93c-3.905 3.905-3.905 10.237 0 14.142zm0-11.314a8 8 0 0 1 11.314 0L19.07 4.93c-3.905-3.905-10.237-3.905-14.142 0z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ArrowRightContained02Icon);
export default ForwardRef;