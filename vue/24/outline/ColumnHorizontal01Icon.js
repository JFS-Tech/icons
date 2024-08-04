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
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      _createElementVNode("path", { d: "M21 19c0 1.105-.883 2-1.973 2H4.973C3.883 21 3 20.105 3 19v-3c0-1.105.883-2 1.973-2h14.054c1.09 0 1.973.895 1.973 2zM21 5c0-1.105-.883-2-1.973-2H4.973C3.883 3 3 3.895 3 5v3c0 1.105.883 2 1.973 2h14.054C20.117 10 21 9.105 21 8z" })
    ])
  ]))
}