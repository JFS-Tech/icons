import * as React from "react";
function DiscountStar02Icon({
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
    d: "m8.4 15.6 7.2-7.2m-6.646.55-.014-.015m6.124 6.188-.014-.015M9.576 4.043l-1.938-.425a.614.614 0 0 0-.716.413l-.601 1.891a.61.61 0 0 1-.399.399l-1.89.601a.614.614 0 0 0-.414.716l.425 1.938a.61.61 0 0 1-.146.545L2.56 11.586a.614.614 0 0 0 0 .827l1.337 1.466c.134.147.188.35.146.545l-.425 1.938c-.068.31.111.62.413.716l1.891.601c.19.06.338.209.399.399l.601 1.89a.613.613 0 0 0 .716.414l1.938-.425a.61.61 0 0 1 .545.146l1.465 1.337a.613.613 0 0 0 .827 0l1.466-1.337a.61.61 0 0 1 .545-.146l1.938.425c.31.068.62-.112.716-.414l.601-1.89a.61.61 0 0 1 .399-.399l1.89-.601a.613.613 0 0 0 .414-.716l-.425-1.938a.61.61 0 0 1 .146-.545l1.337-1.466a.613.613 0 0 0 0-.827l-1.337-1.465a.61.61 0 0 1-.146-.545l.425-1.938a.613.613 0 0 0-.414-.716l-1.89-.601a.61.61 0 0 1-.399-.399l-.601-1.89a.614.614 0 0 0-.716-.414l-1.938.425a.61.61 0 0 1-.545-.146L12.413 2.56a.614.614 0 0 0-.827 0l-1.465 1.337a.61.61 0 0 1-.545.146Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DiscountStar02Icon);
export default ForwardRef;