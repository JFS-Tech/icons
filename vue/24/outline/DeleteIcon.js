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
      d: "m10.72 9.84 2.56 2.56m0 0 2.56 2.56m-2.56-2.56 2.56-2.56m-2.56 2.56-2.56 2.56M7.222 18.8H20.32a1.28 1.28 0 0 0 1.28-1.28V7.28A1.28 1.28 0 0 0 20.32 6H7.222l-4.369 5.798a1 1 0 0 0 0 1.204z"
    })
  ]))
}