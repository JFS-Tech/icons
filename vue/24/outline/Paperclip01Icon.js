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
      d: "m17.51 8.133-7.1 7.1a2.162 2.162 0 1 1-3.053-3.062l5.506-5.473 1.383-1.383a4.308 4.308 0 1 1 6.092 6.092l-1.362 1.362-5.161 5.162c-2.67 2.781-6.716 3.204-9.544.489-2.794-2.683-2.32-6.704.504-9.529L9.916 3.75"
    })
  ]))
}