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
      d: "M10.209 16.2h1.915m0 0h2.004m-2.004 0V7.8m0 0H9a.6.6 0 0 0-.6.6v.882M12.124 7.8H15a.6.6 0 0 1 .6.6v1.13M4.8 21.6h14.4a2.4 2.4 0 0 0 2.4-2.4V4.8a2.4 2.4 0 0 0-2.4-2.4H4.8a2.4 2.4 0 0 0-2.4 2.4v14.4a2.4 2.4 0 0 0 2.4 2.4"
    })
  ]))
}