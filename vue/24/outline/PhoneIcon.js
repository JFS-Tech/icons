const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.663 18.771s-1.158 1.138-1.442 1.472c-.463.493-1.008.726-1.722.726-.069 0-.142 0-.21-.004-1.361-.087-2.625-.617-3.573-1.07a20.3 20.3 0 0 1-6.76-5.283c-1.561-1.879-2.606-3.615-3.297-5.48-.426-1.138-.582-2.025-.513-2.86.046-.536.252-.979.632-1.358L5.34 3.355c.224-.21.462-.324.696-.324.288 0 .522.173.668.32l.014.013c.28.26.545.53.824.818q.214.219.436.444l1.25 1.247c.485.485.485.933 0 1.417-.133.133-.261.265-.394.393-.385.393-.083.092-.481.448-.01.01-.018.014-.023.023-.394.393-.32.777-.238 1.038l.014.04c.325.787.783 1.527 1.479 2.41l.005.004c1.264 1.554 2.596 2.765 4.066 3.693.188.118.38.214.564.306.164.082.32.16.453.242q.027.017.055.032a1 1 0 0 0 .453.114c.38 0 .619-.237.697-.315l.897-.896c.156-.155.403-.343.692-.343.284 0 .517.179.66.334l.008.01 2.524 2.517c.472.467.004 1.431.004 1.431"
    })
  ]))
}