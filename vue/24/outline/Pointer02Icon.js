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
      d: "m12.296 18.145 6.148 2.989c1.152.56 2.382-.612 1.877-1.79L13.526 3.488c-.473-1.104-2.03-1.123-2.53-.032L3.693 19.387c-.533 1.164.665 2.366 1.83 1.836z"
    })
  ]))
}