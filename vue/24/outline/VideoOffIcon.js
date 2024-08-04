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
      d: "m15.375 12.468 4.595-3.176c.577-.316.97-.13 1.01.554l.02 6.648c.013.63-.493.807-.975.506l-4.65-3.385zm0 0v-2.182c0-1.263-1.007-2.286-2.25-2.286H12M7.5 8H5.25C4.007 8 3 9.023 3 10.286V16c0 1.262 1.007 2.286 2.25 2.286h7.875c.472 0 .91-.148 1.272-.4M16.5 20 4.688 4"
    })
  ]))
}