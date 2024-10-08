const React = require("react");
function PhoneOffIcon({
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
    d: "M11.53 13.83c.494.407 1.601 1.177 2.126 1.509.188.119.38.215.564.306.164.082.32.16.453.242q.027.017.055.032a1 1 0 0 0 .453.114c.38 0 .619-.237.697-.315l.897-.896c.156-.155.403-.342.692-.342.284 0 .517.178.66.333l2.532 2.527c.472.467.004 1.431.004 1.431s-1.158 1.138-1.442 1.472c-.463.493-1.008.726-1.722.726-.069 0-.142 0-.21-.004-1.361-.087-2.625-.617-3.573-1.07-1.626-.785-3.522-2.318-4.882-3.505m-2.798-2.95c-1.066-1.445-1.831-2.836-2.377-4.308-.426-1.138-.582-2.024-.513-2.86.046-.536.252-.979.632-1.358L5.34 3.355c.224-.21.462-.324.696-.324.288 0 .522.173.668.32l.014.013c.28.26.545.53.824.818q.214.219.436.444l1.25 1.248c.485.484.485.932 0 1.416-.133.133-.261.265-.394.393-.385.393-.083.092-.481.448-.01.01-.018.014-.023.023-.394.393-.32.777-.238 1.038l.014.04c.212.515.482 1.01.837 1.537M3.13 20.43l17.4-17.4"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PhoneOffIcon);
module.exports = ForwardRef;