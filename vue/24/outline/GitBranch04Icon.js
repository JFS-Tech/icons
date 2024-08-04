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
      d: "M15.008 16.5c0 1.38 1.118 2.5 2.496 2.5A2.5 2.5 0 0 0 20 16.5c0-1.38-1.117-2.5-2.496-2.5a2.5 2.5 0 0 0-2.496 2.5Zm0 0h-2.495a5.985 5.985 0 0 1-5.98-5.99V9M8.992 6.5c0 1.38-1.118 2.5-2.496 2.5A2.5 2.5 0 0 1 4 6.5C4 5.12 5.117 4 6.496 4a2.5 2.5 0 0 1 2.496 2.5Z"
    })
  ]))
}