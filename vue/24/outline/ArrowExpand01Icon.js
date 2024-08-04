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
      d: "M8 20H4m0 0v-4m0 4 4.5-4.5M16 4h4m0 0v4m0-4-4.5 4.5M4 8V4m0 0h4M4 4l4.5 4.5M20 16v4m0 0h-4m4 0-4.5-4.5"
    })
  ]))
}