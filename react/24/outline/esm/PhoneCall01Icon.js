import * as React from "react";
function PhoneCall01Icon({
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
    d: "M12.871 6.326c1.2.201 2.29.768 3.16 1.636a5.82 5.82 0 0 1 1.64 3.154M13.054 2.4a10.4 10.4 0 0 1 5.629 2.911 10.35 10.35 0 0 1 2.917 5.617m-1.667 8.474s-1.159 1.138-1.443 1.471c-.462.494-1.007.727-1.722.727-.068 0-.142 0-.21-.005-1.36-.086-2.624-.616-3.572-1.069a20.3 20.3 0 0 1-6.76-5.283c-1.562-1.879-2.606-3.616-3.298-5.48-.425-1.138-.581-2.025-.512-2.861.045-.535.251-.978.632-1.358l1.561-1.558c.225-.21.463-.325.696-.325.289 0 .522.174.669.32l.014.014c.279.26.545.53.824.818l.435.443 1.25 1.248c.486.485.486.933 0 1.417-.132.133-.26.265-.393.393-.385.393-.083.092-.481.448-.01.01-.019.014-.023.023-.394.393-.32.777-.238 1.037l.013.041c.325.787.783 1.527 1.48 2.409l.004.005c1.264 1.554 2.597 2.765 4.067 3.692.188.12.38.215.563.307.165.082.32.16.454.242.018.009.036.023.055.032a1 1 0 0 0 .453.114c.38 0 .618-.238.696-.315l.898-.896c.155-.155.403-.343.691-.343.284 0 .518.178.66.334l.009.009 2.523 2.518c.472.466.005 1.43.005 1.43"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PhoneCall01Icon);
export default ForwardRef;