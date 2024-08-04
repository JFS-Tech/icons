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
      d: "M15.6 7.8H8.4h1.963c.695 0 1.36.289 1.852.803a2.8 2.8 0 0 1 .767 1.94 2.8 2.8 0 0 1-.767 1.94 2.56 2.56 0 0 1-1.851.803H8.4l3.927 4.114M8.4 10.543h7.2m6 1.457a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0"
    })
  ]))
}