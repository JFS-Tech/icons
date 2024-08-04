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
      d: "M5.4 5.33v-1.8a1.2 1.2 0 0 1 1.2-1.2H18a1.2 1.2 0 0 1 1.2 1.2v4.8M2.4 19.27V6.989a1.2 1.2 0 0 1 1.2-1.2h5.718l2.765 2.954H20.4a1.2 1.2 0 0 1 1.2 1.2v9.329a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4"
    })
  ]))
}