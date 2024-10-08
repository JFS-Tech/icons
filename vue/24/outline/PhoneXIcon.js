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
      d: "m21.6 8.43-3-3m0 0-3-3m3 3-3 3m3-3 3-3m-1.667 16.94s-1.159 1.139-1.443 1.473c-.462.493-1.007.726-1.722.726-.068 0-.142 0-.21-.004-1.36-.087-2.624-.617-3.572-1.07a20.3 20.3 0 0 1-6.76-5.283c-1.562-1.878-2.606-3.615-3.298-5.48-.425-1.138-.581-2.025-.512-2.861.045-.535.251-.978.632-1.357l1.561-1.559c.225-.21.463-.324.696-.324.289 0 .522.173.669.32l.014.013c.279.26.545.53.824.818q.215.219.435.444l1.25 1.247c.486.485.486.933 0 1.417-.132.133-.26.265-.393.393-.385.393-.083.092-.481.448-.01.01-.019.014-.023.023-.394.393-.32.777-.238 1.038l.013.04c.325.787.783 1.527 1.48 2.41l.004.004c1.264 1.554 2.597 2.765 4.067 3.693.188.119.38.215.563.306.165.082.32.16.454.242q.027.017.055.032a1 1 0 0 0 .453.114c.38 0 .618-.237.696-.315l.898-.896c.155-.155.403-.343.691-.343.284 0 .518.179.66.334l.009.01 2.523 2.517c.472.467.005 1.43.005 1.43"
    })
  ]))
}