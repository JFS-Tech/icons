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
      d: "M15.6 14.4c-.536 1.676-1.882 3.017-3.6 3.6m0 3.6c-3.97 0-7.2-3.042-7.2-6.781 0-5.22 7.2-12.42 7.2-12.42s7.2 7.2 7.2 12.42c0 3.739-3.23 6.78-7.2 6.78"
    })
  ]))
}