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
      d: "M19.579 10.484V7.442a1 1 0 0 0-1-1h-6.67a1 1 0 0 1-.707-.293L9.766 4.714a1 1 0 0 0-.707-.293H3.4a1 1 0 0 0-1 1V18.58a1 1 0 0 0 1 1h1.177a.855.855 0 0 0 .855-.855v0q0-.156.055-.3l2.734-7.29a1 1 0 0 1 .936-.65h11.056a1 1 0 0 1 .95 1.316l-2.366 7.095a1 1 0 0 1-.948.684H4.42"
    })
  ]))
}