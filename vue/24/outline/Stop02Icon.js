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
    _createElementVNode("g", {
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      _createElementVNode("path", { d: "M17.625 3H6.375A3.375 3.375 0 0 0 3 6.375v11.25A3.375 3.375 0 0 0 6.375 21h11.25A3.375 3.375 0 0 0 21 17.625V6.375A3.375 3.375 0 0 0 17.625 3Z" }),
      _createElementVNode("path", { d: "M8.625 9.89c0-.698.567-1.265 1.266-1.265h4.218c.7 0 1.266.567 1.266 1.266v4.218c0 .7-.567 1.266-1.266 1.266H9.891a1.266 1.266 0 0 1-1.266-1.266z" })
    ])
  ]))
}