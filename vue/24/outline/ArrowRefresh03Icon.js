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
      d: "M16 19.369a8.01 8.01 0 0 0 4-6.94 8.01 8.01 0 0 0-5-7.428m0 11.935v4.005h4M8 5.572a8.01 8.01 0 0 0-4 6.94 8.01 8.01 0 0 0 5 7.428M9 8.005V4H5"
    })
  ]))
}