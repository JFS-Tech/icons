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
      d: "M9.6 16.2 7.8 21m8.793-.067-2.12-4.667m-.073-6.109L11.946 12.6m0 0L9.6 10.268m2.346 2.332v-6M4.8 16.2a2.4 2.4 0 0 1-2.4-2.4V5.4A2.4 2.4 0 0 1 4.8 3h14.4a2.4 2.4 0 0 1 2.4 2.4v8.4a2.4 2.4 0 0 1-2.4 2.4z"
    })
  ]))
}