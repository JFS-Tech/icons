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
      d: "m8.044 9.244 11.89 9.699m0-13.151L8.044 15.49m9.15-3.123-.02.021m4.426-.021-.022.021m-15.89-2.213a3.288 3.288 0 1 1 0-6.576 3.288 3.288 0 0 1 0 6.576m0 10.959a3.288 3.288 0 1 1 0-6.576 3.288 3.288 0 0 1 0 6.576"
    })
  ]))
}