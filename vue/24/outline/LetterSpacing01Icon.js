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
      d: "M5.763 20.754 2.4 17.391m0 0 3.363-3.363M2.4 17.39h19.2m-3.363 3.363 3.363-3.363m0 0-3.363-3.363m-5.979-1.539V2.4m0 0h-4.45m4.45 0h4.155"
    })
  ]))
}