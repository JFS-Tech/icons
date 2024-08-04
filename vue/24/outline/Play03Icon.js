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
    _createElementVNode("path", { d: "M17.973 10.937c1.367.762 1.372 1.72 0 2.58L7.376 20.666c-1.331.71-2.236.29-2.33-1.247L5 4.46c-.03-1.416 1.136-1.817 2.248-1.138z" })
  ]))
}