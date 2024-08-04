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
      d: "M22.2 13.8v-3.6M5.4 13.8v-3.6M4.2 18h12a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 16.2 6h-12a2.4 2.4 0 0 0-2.4 2.4v7.2A2.4 2.4 0 0 0 4.2 18"
    })
  ]))
}