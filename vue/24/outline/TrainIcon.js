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
      d: "m6 20.4-1.8 2.4m16.119-.02-1.853-2.36M8.401 16.872V16.8m7.2.072V16.8m-10.8-3h15m-7.8-9v8.4m-3-12h6M6.564 20.4h10.87a2.965 2.965 0 0 0 2.965-2.965v-9.67A2.965 2.965 0 0 0 17.435 4.8H6.565A2.965 2.965 0 0 0 3.6 7.765v9.67A2.965 2.965 0 0 0 6.565 20.4Z"
    })
  ]))
}