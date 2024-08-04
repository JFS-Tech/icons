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
      d: "M3 19h.012M7 19a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8m12 8h3a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-2.8 2"
    })
  ]))
}