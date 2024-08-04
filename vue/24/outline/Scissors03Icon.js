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
      d: "M4.8 9.395 21.6 16.8m0-9.6L4.8 14.605M6 9.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2m0 12a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2"
    })
  ]))
}