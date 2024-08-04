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
      d: "M9.353 16.2v2.1c0 .557.223 1.091.62 1.485s.936.615 1.498.615h7.411c.562 0 1.1-.221 1.498-.615s.62-.928.62-1.485V5.7c0-.557-.223-1.091-.62-1.485a2.13 2.13 0 0 0-1.498-.615h-7.411c-.562 0-1.1.221-1.498.615s-.62.928-.62 1.485v2.1m6.353 4.2H3m0 0 3.176 3.15M3 12l3.176-3.15"
    })
  ]))
}