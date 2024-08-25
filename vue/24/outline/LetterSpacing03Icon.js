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
      d: "M2.4 7.054 5.854 3.6m0 0 3.454 3.454M5.854 3.6V19.72M2.4 16.265l3.454 3.454m0 0 3.454-3.454m4.978 1.151h3.047m0 0h3.048m-3.048 0V7.054m0 0h-4.571v1.829m4.571-1.829H21.6v2.133"
    })
  ]))
}