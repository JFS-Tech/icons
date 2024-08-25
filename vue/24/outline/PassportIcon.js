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
      d: "M9.6 16.8h4.8m-7.6 4.8h10.4a2 2 0 0 0 2-2V4.4a2 2 0 0 0-2-2H6.8a2 2 0 0 0-2 2v15.2a2 2 0 0 0 2 2m7.6-13.2a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0"
    })
  ]))
}