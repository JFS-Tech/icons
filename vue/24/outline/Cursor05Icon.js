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
      d: "M5.62 12.436 4.34 13.714m-.134-4.686H2.4M4.34 4.34 5.619 5.62M9.028 2.4v1.807m4.686.134L12.436 5.62m3.581 10.375 4.603-1.606c.862-.301.896-1.51.05-1.845L10.142 8.877c-.791-.314-1.587.463-1.293 1.262l3.448 10.823c.314.853 1.521.85 1.844-.004z"
    })
  ]))
}