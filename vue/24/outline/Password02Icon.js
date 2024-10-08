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
      d: "M6.529 9.302h.14m5.33 0h.14m5.19 0h.14m-6.07 5.4H4.534A2.133 2.133 0 0 1 2.4 12.57V6.036c0-1.179.955-2.134 2.133-2.134h14.934c1.178 0 2.133.955 2.133 2.134v3.266m-6.189 4.295 1.39-.695a3.6 3.6 0 0 1 3.22 0l1.39.695v3.345c0 1.155-1.068 1.935-3 3.155-1.932-1.22-3-2.25-3-3.155z"
    })
  ]))
}