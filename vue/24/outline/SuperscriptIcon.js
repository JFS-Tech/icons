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
      d: "M2.4 8.212 8.087 13.9m0 0 5.687 5.687m-5.687-5.687 5.687-5.687M8.087 13.9 2.4 19.586M16.903 7.097a2.4 2.4 0 0 1 4.8 0c0 .71-.6 1.2-1.2 1.8l-3.6 3h4.8"
    })
  ]))
}