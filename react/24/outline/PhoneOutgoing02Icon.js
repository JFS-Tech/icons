const React = require("react");
function PhoneOutgoing02Icon({
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
    d: "m18.355 2.333 3.892 3.892m0 0-3.438 3.44m3.438-3.44h-8.843m6.386 13.18s-1.192 1.171-1.484 1.514c-.476.508-1.037.748-1.771.748-.071 0-.147 0-.217-.005-1.4-.089-2.7-.634-3.675-1.1a20.9 20.9 0 0 1-6.954-5.435c-1.606-1.932-2.68-3.719-3.392-5.637C1.86 8.32 1.7 7.407 1.77 6.547c.048-.55.26-1.006.65-1.397l1.607-1.603c.231-.216.476-.334.716-.334.297 0 .537.179.688.33l.014.014c.288.268.56.545.848.841l.448.456 1.286 1.284c.5.498.5.959 0 1.457-.137.137-.269.273-.405.405-.396.404-.085.094-.495.46-.01.01-.019.014-.023.024-.406.404-.33.8-.245 1.067l.014.042c.334.81.805 1.57 1.521 2.478l.005.005c1.3 1.598 2.671 2.844 4.184 3.799.193.122.39.22.58.315.169.084.329.164.466.249q.027.017.056.033c.16.08.311.117.466.117.391 0 .636-.244.717-.324l.923-.922c.16-.16.415-.352.712-.352.292 0 .532.183.678.343l.01.01 2.595 2.59c.485.48.005 1.472.005 1.472"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PhoneOutgoing02Icon);
module.exports = ForwardRef;