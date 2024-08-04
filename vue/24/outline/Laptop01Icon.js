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
      "stroke-linejoin": "round",
      d: "M20.4 15.6V6.231c0-1.122-.94-2.03-2.1-2.03H5.7c-1.16 0-2.1.908-2.1 2.03v9.37m16.8 0a1.2 1.2 0 0 1 1.2 1.2v1.8a1.2 1.2 0 0 1-1.2 1.2H3.6a1.2 1.2 0 0 1-1.2-1.2v-1.8a1.2 1.2 0 0 1 1.2-1.2m16.8 0h-4.2l-1.8 1.2H9.9l-2.1-1.2H3.6"
    })
  ]))
}