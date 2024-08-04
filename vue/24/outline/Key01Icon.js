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
      d: "M7.679 6.6h.12m6.82 2.782 6.688 6.689a1 1 0 0 1 .293.707V20.6a1 1 0 0 1-1 1h-2.491v-2.618h-2.618v-2.619l-3.225-3.036a6.11 6.11 0 1 1 2.352-4.818z"
    })
  ]))
}