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
      d: "M6.6 10.2h.028m3.572 0h.028m7.144 0h.028m-3.6 0h.028M8.4 13.8h.028m3.572 0h.028m3.572 0h.028M4.8 18h14.4a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 19.2 6H4.8a2.4 2.4 0 0 0-2.4 2.4v7.2A2.4 2.4 0 0 0 4.8 18"
    })
  ]))
}