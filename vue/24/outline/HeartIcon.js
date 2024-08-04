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
      d: "M3.807 6.207a4.8 4.8 0 0 1 6.787 0L12 7.612l1.406-1.405a4.8 4.8 0 1 1 6.788 6.787L12 21.189l-8.193-8.195a4.8 4.8 0 0 1 0-6.787Z",
      "clip-rule": "evenodd"
    })
  ]))
}