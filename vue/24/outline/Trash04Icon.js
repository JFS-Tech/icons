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
      d: "M4 6.176h16M16 21H8c-1.105 0-2-.948-2-2.118V7.235c0-.584.448-1.059 1-1.059h10c.552 0 1 .475 1 1.06v11.646c0 1.17-.895 2.118-2 2.118ZM10 6.176h4c.552 0 1-.474 1-1.058v-1.06C15 3.475 14.552 3 14 3h-4c-.552 0-1 .474-1 1.059v1.059c0 .584.448 1.058 1 1.058Z"
    })
  ]))
}