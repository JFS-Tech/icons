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
      d: "M11.78 20.561a8.78 8.78 0 1 1 8.143-12.073M4.098 15.073h2.56a1.83 1.83 0 0 0 1.83-1.83v-2.377c0-1.01.819-1.83 1.83-1.83h1.828a1.83 1.83 0 0 0 1.83-1.829v-3.11m3.512 11.196v-.066m3.512-.01c0 2.29-3.512 5.344-3.512 5.344s-3.512-3.054-3.512-5.345c0-1.897 1.572-3.435 3.512-3.435S21 13.319 21 15.216"
    })
  ]))
}