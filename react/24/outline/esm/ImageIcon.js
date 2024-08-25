import * as React from "react";
function ImageIcon({
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
    d: "m8.688 12.827-.647-.763zm.05-.047-.713-.702-.001.001zm-2.084 1.77-.646-.763zm-.111.117.82.572zM17.337 12.9l-.693.722zM15.6 11.233l-.692.722zm-.644-.004-.682-.731-.003.002zm-3.215 3.02.683.732.002-.002zm-.654-.014-.716.699.002.001zm-.008-.008-.717.697v.001zm-.046-.045.654-.756zm-1.566-1.356.655-.756zm-.046-.045.716-.697zm-.009-.008.717-.698-.002-.002zm-.667-.002-.711-.703-.001.001zm7.304-5.834v-1a1 1 0 0 0-1 1zm.321 0h1a1 1 0 0 0-1-1zm0 .273v1a1 1 0 0 0 1-1zm-.321 0h-1a1 1 0 0 0 1 1zM2 6.375v11.25h2V6.375zM6.375 22h11.25v-2H6.375zM22 17.625V6.375h-2v11.25zM17.625 2H6.375v2h11.25zM22 6.375A4.375 4.375 0 0 0 17.625 2v2A2.375 2.375 0 0 1 20 6.375zM17.625 22A4.375 4.375 0 0 0 22 17.625h-2A2.375 2.375 0 0 1 17.625 20zM2 17.625A4.375 4.375 0 0 0 6.375 22v-2A2.375 2.375 0 0 1 4 17.625zm2-11.25A2.375 2.375 0 0 1 6.375 4V2A4.375 4.375 0 0 0 2 6.375zm5.334 7.215c.058-.049.106-.098.116-.11L8.024 12.08l-.008.008q-.002.002 0 0l.025-.023zm-2.033 1.723 2.033-1.723-1.293-1.526-2.033 1.723zm.063-.074a1 1 0 0 1-.052.063l-.011.011-1.293-1.526c-.07.06-.184.162-.286.31zm.011-.036a.06.06 0 0 1-.011.036l-1.642-1.143c-.225.324-.347.71-.347 1.107zm0 1.953v-1.953h-2v1.953zm-.531-.531c.293 0 .531.238.531.531h-2c0 .811.658 1.469 1.469 1.469zm10.312 0H6.844v2h10.312zm-.531.531c0-.293.238-.531.531-.531v2c.811 0 1.469-.658 1.469-1.469zm0-3.58v3.58h2v-3.58zm.02.045a.06.06 0 0 1-.02-.045h2c0-.528-.215-1.033-.596-1.398zm-1.736-1.666 1.735 1.666 1.385-1.443-1.735-1.666zm.73.005a.53.53 0 0 1-.73-.005l1.385-1.443a1.47 1.47 0 0 0-2.02-.014zm-3.212 3.018 3.215-3.02-1.37-1.458-3.214 3.021zm-2.053-.043a1.47 1.47 0 0 0 2.05.046l-1.364-1.462a.53.53 0 0 1 .743.017zm-.01-.01.008.009 1.432-1.397-.008-.008zm.015.013-.024-.021q0-.003 0 0l.008.007 1.433-1.395c-.01-.01-.054-.056-.108-.103zm-1.566-1.356 1.566 1.356 1.31-1.512-1.566-1.356zm-.108-.104c.01.01.054.057.108.104l1.31-1.512q.02.018.023.022.001 0 0 0l-.008-.008zm-.008-.007.008.008 1.433-1.396-.008-.008zm.76.003a.53.53 0 0 1-.758-.002l1.43-1.399a1.47 1.47 0 0 0-2.094-.005zm-.007.008.009-.01-1.425-1.403-.01.01zm6.6-5.545h.321v-2h-.321zm-.679-1v.273h2v-.273zm1-.727h-.321v2h.321zm.679 1v-.273h-2v.273z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(ImageIcon);
export default ForwardRef;