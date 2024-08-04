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
      d: "M11.7 21.6h-6a2.4 2.4 0 0 1-2.4-2.4V4.8a2.4 2.4 0 0 1 2.4-2.4h10.8a2.4 2.4 0 0 1 2.4 2.4v4.8M7.5 7.2h7.2m-7.2 3.6h7.2m0 4.754v2.944c0 1.455 1.552 2.79 3.006 2.79 1.456 0 2.994-1.335 2.994-2.79V14.78c0-.77-.443-1.552-1.428-1.552-1.053 0-1.565.782-1.565 1.552v3.564M7.5 14.4h3.6"
    })
  ]))
}