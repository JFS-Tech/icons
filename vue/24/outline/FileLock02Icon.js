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
      d: "M9.6 21.6H7.2A3.6 3.6 0 0 1 3.6 18V6a3.6 3.6 0 0 1 3.6-3.6h8.4A3.6 3.6 0 0 1 19.2 6v3M15 15v-1.2a1.8 1.8 0 0 1 3.6 0v1.8M15 7.2H7.2m4.2 3.6H7.2m2.4 3.6H7.2m7.2 7.2h4.8a1.2 1.2 0 0 0 1.2-1.2v-3.6a1.2 1.2 0 0 0-1.2-1.2h-4.8a1.2 1.2 0 0 0-1.2 1.2v3.6a1.2 1.2 0 0 0 1.2 1.2"
    })
  ]))
}