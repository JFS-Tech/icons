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
      d: "M6.011 12.187c3.308-3.21 8.671-3.21 11.979 0m-8.984 2.907c1.654-1.606 4.335-1.606 5.99 0M12 18l.017-.017M3 9.618c4.97-4.824 13.03-4.824 18 0"
    })
  ]))
}