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
      "stroke-linejoin": "round",
      d: "M13.342 3.07a3 3 0 0 0-2.684 0L4.8 6v8.028C4.8 16.2 7.362 18.67 12 21.6c4.638-2.929 7.2-4.8 7.2-7.572V6z"
    })
  ]))
}