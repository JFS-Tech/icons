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
      d: "M7.143 7.902h9.638M6.485 2.438v1.639m10.828-1.64v1.64m3.187 3v11.486a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3V7.076a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3"
    })
  ]))
}