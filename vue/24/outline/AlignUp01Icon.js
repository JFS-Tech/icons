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
      d: "M21.6 2.4H2.4m13.8 16.8V9.6a2.4 2.4 0 0 0-2.4-2.4h-3.6a2.4 2.4 0 0 0-2.4 2.4v9.6a2.4 2.4 0 0 0 2.4 2.4h3.6a2.4 2.4 0 0 0 2.4-2.4"
    })
  ]))
}