import * as React from "react";
function PhoneOutgoing01Icon({
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
    d: "M16.093 2.716h5.504m0 0 .003 4.863m-.003-4.863-6.253 6.253m5.092 10.054s-1.192 1.17-1.484 1.514c-.476.507-1.036.747-1.771.747-.07 0-.146 0-.217-.005-1.399-.089-2.7-.634-3.674-1.1a20.9 20.9 0 0 1-6.954-5.435c-1.607-1.932-2.681-3.719-3.392-5.637-.439-1.17-.599-2.083-.528-2.943.047-.55.26-1.006.65-1.397l1.607-1.603c.23-.216.475-.334.716-.334.297 0 .537.179.688.33l.014.014c.287.268.56.545.848.841q.22.224.447.456l1.286 1.284c.5.498.5.959 0 1.457-.136.137-.268.273-.405.405-.395.404-.085.094-.494.46-.01.01-.02.014-.024.024-.405.404-.33.8-.245 1.067l.014.042c.335.81.806 1.57 1.522 2.478l.005.005c1.3 1.598 2.67 2.844 4.183 3.799.193.122.391.22.58.315.17.084.33.164.466.249l.057.033c.16.08.31.117.466.117.391 0 .636-.244.716-.324l.924-.922c.16-.16.414-.352.711-.352.292 0 .532.183.678.343l.01.01 2.596 2.59c.485.48.004 1.472.004 1.472"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PhoneOutgoing01Icon);
export default ForwardRef;