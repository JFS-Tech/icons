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
      d: "M10.2 21.6H7.8A3.6 3.6 0 0 1 4.2 18V6a3.6 3.6 0 0 1 3.6-3.6h8.4A3.6 3.6 0 0 1 19.8 6v3m-4.2-1.8H7.8m4.2 3.6H7.8m2.4 3.6H7.8m6 .3 1.39-.695a3.6 3.6 0 0 1 3.22 0l1.39.695v3.345c0 1.155-1.068 1.935-3 3.155-1.932-1.22-3-2.25-3-3.155z"
    })
  ]))
}