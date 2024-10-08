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
      d: "M4.8 17.105a4.85 4.85 0 0 1-2.4-4.192c0-2.196 1.45-4.05 3.437-4.643C6.874 5.874 9.244 4.2 12 4.2c3.422 0 6.247 2.58 6.666 5.917a3.87 3.87 0 0 1 2.934 3.764c0 1.345-.68 2.53-1.714 3.224M8.4 19.8v-6m8.4 6v-6m-4.2 6v-6"
    })
  ]))
}