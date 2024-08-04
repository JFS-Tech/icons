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
      d: "M6.544 18H6.6m3 3.6h.056M12 18h.056M15 21.6h.056m2.288-3.6h.056M21 8.4a6 6 0 0 1-6 6H7.8a4.8 4.8 0 1 1 2.079-9.128A6 6 0 0 1 21 8.4"
    })
  ]))
}