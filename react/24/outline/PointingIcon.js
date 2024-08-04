const React = require("react");
function PointingIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 17 18",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    filter: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M4.11 12.365c-.281-.363-.634-1.098-1.249-2.016-.353-.504-1.22-1.461-1.481-1.955a1.27 1.27 0 0 1-.152-1.008A1.33 1.33 0 0 1 2.67 6.378c.514.104.988.356 1.36.726q.391.368.716.796c.161.202.201.282.383.514.181.232.302.464.212.121-.071-.504-.192-1.35-.363-2.106-.131-.575-.162-.666-.282-1.099-.121-.433-.192-.796-.323-1.29q-.18-.728-.282-1.472A2.84 2.84 0 0 1 4.353.704a1.2 1.2 0 0 1 1.31-.222c.444.328.775.786.948 1.31a7.8 7.8 0 0 1 .524 2.016c.16 1.008.473 2.48.483 2.782 0-.373-.07-1.16 0-1.512.07-.368.326-.673.676-.806.3-.092.617-.113.927-.06.312.065.59.244.776.503.234.588.363 1.212.383 1.845a6.8 6.8 0 0 1 .282-1.633 1.25 1.25 0 0 1 .696-.484c.333-.06.674-.06 1.008 0 .273.091.512.264.685.494a5.6 5.6 0 0 1 .383 1.673c0 .141.07-.393.292-.746a1.01 1.01 0 1 1 1.915.645v2.279a12 12 0 0 1-.242 1.753c-.175.511-.42.996-.725 1.441a7.3 7.3 0 0 0-1.2 1.824c-.075.33-.11.67-.1 1.008q-.002.471.12.928a6 6 0 0 1-1.24 0c-.392-.06-.876-.847-1.007-1.089a.383.383 0 0 0-.685 0c-.222.383-.716 1.079-1.059 1.119-.675.08-2.066 0-3.165 0 0 0 .182-1.008-.231-1.37-.414-.364-.837-.787-1.15-1.07z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.11 12.365c-.281-.363-.634-1.098-1.249-2.016-.353-.504-1.22-1.461-1.481-1.955a1.27 1.27 0 0 1-.152-1.008A1.33 1.33 0 0 1 2.67 6.378c.514.104.988.356 1.36.726q.391.368.716.796c.161.202.201.282.383.514.181.232.302.464.212.121-.071-.504-.192-1.35-.363-2.106-.131-.575-.162-.666-.282-1.099-.121-.433-.192-.796-.323-1.29q-.18-.728-.282-1.472A2.84 2.84 0 0 1 4.353.704a1.2 1.2 0 0 1 1.31-.222c.444.328.775.786.948 1.31a7.8 7.8 0 0 1 .524 2.016c.16 1.008.473 2.48.483 2.782 0-.373-.07-1.16 0-1.512.07-.368.326-.673.676-.806.3-.092.617-.113.927-.06.312.065.59.244.776.503.234.588.363 1.212.383 1.845a6.8 6.8 0 0 1 .282-1.633 1.25 1.25 0 0 1 .696-.484c.333-.06.674-.06 1.008 0 .273.091.512.264.685.494a5.6 5.6 0 0 1 .383 1.673c0 .141.07-.393.292-.746a1.01 1.01 0 1 1 1.915.645v2.279a12 12 0 0 1-.242 1.753c-.175.511-.42.996-.725 1.441a7.3 7.3 0 0 0-1.2 1.824c-.075.33-.11.67-.1 1.008q-.002.471.12.928a6 6 0 0 1-1.24 0c-.392-.06-.876-.847-1.007-1.089a.383.383 0 0 0-.685 0c-.222.383-.716 1.079-1.059 1.119-.675.08-2.066 0-3.165 0 0 0 .182-1.008-.231-1.37-.414-.364-.837-.787-1.15-1.07z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#0A090B",
    d: "M12.658 12.915V9.436a.377.377 0 0 0-.756 0v3.48a.378.378 0 0 0 .756 0M10.662 12.914l-.02-3.48a.377.377 0 0 0-.756.004l.02 3.48a.377.377 0 0 0 .756-.004M7.87 9.441l.02 3.474a.379.379 0 1 0 .756-.004l-.02-3.474a.379.379 0 1 0-.756.004"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "a",
    width: 16.879,
    height: 18,
    x: 0,
    y: 0,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: 0.4
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_101_5443"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_101_5443",
    result: "shape"
  }))));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PointingIcon);
module.exports = ForwardRef;