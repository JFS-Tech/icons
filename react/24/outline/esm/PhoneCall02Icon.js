import * as React from "react";
function PhoneCall02Icon({
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
    d: "M8.79 9.072a5.13 5.13 0 0 1 2.992-.95 5.14 5.14 0 0 1 2.99.944M6.456 6.508a9.2 9.2 0 0 1 5.328-1.695 9.13 9.13 0 0 1 5.324 1.684M2.42 18.267s.013-1.433-.018-1.818c-.02-.597.175-1.082.621-1.528.043-.043.089-.089.134-.129.903-.794 2.023-1.252 2.896-1.561a17.94 17.94 0 0 1 7.514-.921c2.146.197 3.881.63 5.476 1.361.976.445 1.626.9 2.105 1.466.305.362.453.767.453 1.24l-.002 1.947c-.009.272-.086.491-.232.637-.18.18-.434.218-.617.218h-.017c-.337.012-.67.009-1.025.004q-.27-.003-.548-.006l-1.558.002c-.605 0-.885-.279-.884-.884 0-.165-.003-.328 0-.49-.005-.486-.005-.11.021-.58 0-.012.003-.02 0-.029 0-.49-.285-.685-.499-.796l-.034-.017c-.693-.287-1.44-.464-2.425-.58h-.006c-1.758-.18-3.345-.105-4.842.234-.19.043-.37.103-.542.16-.154.052-.3.1-.434.132q-.027.006-.054.014a.9.9 0 0 0-.354.212c-.238.237-.238.534-.238.63l-.001 1.12c0 .194-.038.465-.218.645-.177.177-.434.212-.62.203h-.01l-3.146.004c-.585.003-.896-.89-.896-.89"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PhoneCall02Icon);
export default ForwardRef;