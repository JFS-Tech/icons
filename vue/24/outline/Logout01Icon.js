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
      d: "M15.22 20.4h3.706c.561 0 1.1-.221 1.497-.615s.62-.928.62-1.485V5.7c0-.557-.223-1.091-.62-1.485a2.13 2.13 0 0 0-1.497-.615H15.22m-.263 8.4h-12m0 0 4.585 4.8M2.957 12l4.585-4.8"
    })
  ]))
}