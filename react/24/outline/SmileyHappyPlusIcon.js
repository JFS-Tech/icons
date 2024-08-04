const React = require("react");
function SmileyHappyPlusIcon({
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
    d: "m17.935 11.605.268-.963zm.419.422.974-.225zm-5.552-6.341.347-.938zm.363.473-.989.147zM20.816 2a1 1 0 1 0-2 0zm-2 6.6a1 1 0 1 0 2 0zm-2.24-4.285a1 1 0 1 0 0 2zm6.424 2a1 1 0 1 0 0-2zM7.699 15.329a1 1 0 0 0-1.709 1.04zm6.325 1.04a1 1 0 1 0-1.708-1.04zm-6.795-5.426v-1a1 1 0 0 0-1 1zm.091 0h1a1 1 0 0 0-1-1zm5.383 0v-1a1 1 0 0 0-1 1zm.08 0h1a1 1 0 0 0-1-1zm-5.463.074v1a1 1 0 0 0 1-1zm-.09 0h-1a1 1 0 0 0 1 1zm5.554 0v1a1 1 0 0 0 1-1zm-.081 0h-1a1 1 0 0 0 1 1zm.446-6.27a9.7 9.7 0 0 0-3.356-.597v2a7.7 7.7 0 0 1 2.662.474zm5.054 5.895c-2.099-.585-3.715-2.39-4.049-4.63l-1.978.294c.45 3.016 2.626 5.464 5.49 6.262zm1.383 3.433c0-.781-.089-1.542-.258-2.273l-1.948.45q.204.88.206 1.823zM9.793 24c5.423 0 9.793-4.458 9.793-9.925h-2c0 4.39-3.503 7.925-7.793 7.925zM0 14.075C0 19.542 4.37 24 9.793 24v-2C5.503 22 2 18.466 2 14.075zM9.793 4.15C4.371 4.15 0 8.608 0 14.075h2C2 9.684 5.503 6.15 9.793 6.15zm7.873 8.418a.42.42 0 0 1-.286-.315l1.948-.45a1.58 1.58 0 0 0-1.125-1.161zm-5.21-5.944a.42.42 0 0 1-.28-.318l1.978-.295c-.076-.514-.412-1.044-1.005-1.263zM18.815 2v6.6h2V2zm-2.24 4.315H23v-2h-6.424zm-6.569 10.351c-.952 0-1.81-.518-2.308-1.337l-1.709 1.04c.832 1.365 2.31 2.297 4.017 2.297zm2.309-1.337c-.5.82-1.357 1.337-2.309 1.337v2c1.707 0 3.186-.932 4.017-2.297zm-5.087-3.386h.091v-2h-.09zm5.474 0h.08v-2h-.08zm-6.383-1v.074h2v-.074zm1-.926h-.09v2h.09zm.91 1v-.074h-2v.074zm3.554-.074v.074h2v-.074zm1-.926h-.081v2h.08zm.919 1v-.074h-2v.074z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(SmileyHappyPlusIcon);
module.exports = ForwardRef;