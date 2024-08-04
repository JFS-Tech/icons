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
      d: "M8.625 20 12 16.571 15.375 20M5.25 16.571h13.5c1.243 0 2.25-1.023 2.25-2.285v-8C21 5.023 19.993 4 18.75 4H5.25C4.007 4 3 5.023 3 6.286v8c0 1.262 1.007 2.285 2.25 2.285"
    })
  ]))
}