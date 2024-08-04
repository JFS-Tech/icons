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
    _createElementVNode("path", { d: "M7.75 7.75h8.5a4.25 4.25 0 0 1 0 8.5h-8.5m0-8.5a4.25 4.25 0 0 0 0 8.5m0-8.5a4.25 4.25 0 0 1 0 8.5" })
  ]))
}