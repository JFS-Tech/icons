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
    _createElementVNode("g", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      _createElementVNode("path", { d: "M4.8 21.6h14.4c1.325 0 2.4-1.13 2.4-2.526V4.926c0-1.395-1.075-2.526-2.4-2.526H4.8c-1.326 0-2.4 1.131-2.4 2.526v14.148c0 1.395 1.074 2.526 2.4 2.526" }),
      _createElementVNode("path", { d: "M6 15.6h12l-4-7-3 4.5-2-2z" })
    ])
  ]))
}