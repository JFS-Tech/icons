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
    _createElementVNode("path", { d: "M3.462 15.02H21M3.462 9.01H21M18.78 21H4.943C3.87 21 3 20.117 3 19.027V4.973C3 3.883 3.87 3 4.942 3h13.839c1.072 0 1.942.883 1.942 1.973v14.054c0 1.09-.87 1.973-1.942 1.973Z" })
  ]))
}