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
      d: "m19.821 7.2-8.314-4.8-8.313 4.8v9.6l8.313 4.8m8.314-14.4-8.314 5.4m8.314-5.4V12m-8.314 9.6v-9m0 9 1.8-1.039m-1.8-7.961-7.8-4.8m11.4 1.8-7.8-4.8m8.1 12.9h2.7m0 0h2.7m-2.7 0V15m0 2.7v2.7"
    })
  ]))
}