import * as React from "react";
function PhoneIncoming02Icon({
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
    d: "M17.296 9.892 13.404 6m0 0 3.438-3.44M13.404 6h8.843M19.79 19.18s-1.192 1.17-1.484 1.513c-.476.508-1.036.748-1.771.748q-.108.001-.217-.005c-1.4-.09-2.7-.635-3.675-1.1A20.9 20.9 0 0 1 5.688 14.9c-1.606-1.933-2.68-3.72-3.392-5.637-.438-1.171-.598-2.083-.527-2.944.047-.55.259-1.006.65-1.396l1.606-1.603c.231-.217.476-.334.717-.334.296 0 .537.179.687.329l.014.014c.288.268.561.546.849.842q.22.224.447.456L8.025 5.91c.5.499.5.96 0 1.458-.136.136-.268.272-.405.404-.396.404-.085.094-.495.461-.01.01-.019.014-.023.023-.405.405-.33.8-.245 1.068l.014.042c.334.809.806 1.57 1.522 2.478l.004.005c1.3 1.598 2.672 2.844 4.184 3.798.193.123.391.221.58.315.169.085.33.165.466.25.019.009.037.023.056.032.16.08.311.118.467.118.39 0 .636-.244.716-.324l.923-.922c.16-.16.415-.353.712-.353.292 0 .532.184.678.344l.01.009 2.596 2.59c.485.48.004 1.472.004 1.472"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PhoneIncoming02Icon);
export default ForwardRef;