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
      d: "M3 13.143v4.571C3 18.977 4.007 20 5.25 20h13.5c1.243 0 2.25-1.023 2.25-2.286v-4.571m-18 0 2.828-7.66A2.25 2.25 0 0 1 7.934 4h8.132c.938 0 1.777.591 2.107 1.483L21 13.143m-18 0h4.5l1.5 1.6h6l1.5-1.6H21"
    })
  ]))
}