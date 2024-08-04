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
      d: "M9.176 3.364a3.291 3.291 0 0 1 5.619 2.327V9M3.9 11.177a7.68 7.68 0 0 0 7.602 6.576m0 0a7.68 7.68 0 0 0 7.602-6.576m-7.602 6.576V21.6M8.212 7.8v2.28a3.292 3.292 0 0 0 4.875 2.886M3.3 2.4l17.4 17.4"
    })
  ]))
}