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
      d: "M18 2.4A3.6 3.6 0 0 1 21.6 6v12a3.6 3.6 0 0 1-3.6 3.6H6A3.6 3.6 0 0 1 2.4 18V6A3.6 3.6 0 0 1 6 2.4z"
    })
  ]))
}