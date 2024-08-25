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
      d: "M14.387 14.387a3.375 3.375 0 0 1-4.773 0m4.772 0a3.375 3.375 0 0 0 0-4.773m0 4.772 3.58 3.58m-8.352-3.58a3.375 3.375 0 0 1 0-4.772m0 4.772-3.58 3.58m3.58-8.352a3.375 3.375 0 0 1 4.772 0m-4.772 0-3.58-3.58m8.353 3.58 3.58-3.58m.397 12.33A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728"
    })
  ]))
}