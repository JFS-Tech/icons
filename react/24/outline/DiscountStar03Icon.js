const React = require("react");
function DiscountStar03Icon({
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
    d: "m8.4 15.6 7.2-7.2m-6.646.55-.014-.015m6.125 6.188-.014-.015m-3.552-11.47L9.575 2.573a.817.817 0 0 0-1.147.405l-.906 2.066a.84.84 0 0 1-.64.498l-2.157.318c-.474.07-.794.541-.7 1.03l.432 2.228a.89.89 0 0 1-.238.795l-1.566 1.58a.893.893 0 0 0 .016 1.261l1.604 1.538a.89.89 0 0 1 .256.789l-.377 2.237c-.082.492.249.955.724 1.012l2.164.26a.83.83 0 0 1 .652.482l.957 2.041c.21.448.739.62 1.155.375l1.898-1.116a.8.8 0 0 1 .799-.01l1.924 1.065a.817.817 0 0 0 1.146-.405l.907-2.066a.84.84 0 0 1 .64-.498l2.157-.318c.474-.07.794-.541.7-1.03l-.432-2.228a.89.89 0 0 1 .237-.795l1.566-1.58a.893.893 0 0 0-.015-1.261l-1.604-1.538a.89.89 0 0 1-.256-.789l.377-2.238c.082-.491-.249-.954-.724-1.011l-2.165-.261a.83.83 0 0 1-.651-.481l-.957-2.041a.816.816 0 0 0-1.156-.375l-1.898 1.116a.8.8 0 0 1-.798.01Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(DiscountStar03Icon);
module.exports = ForwardRef;