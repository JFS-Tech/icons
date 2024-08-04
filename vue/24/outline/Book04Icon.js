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
      d: "M20.492 15.692H6.462a2.954 2.954 0 0 0-2.954 2.954m16.984-2.954v4.431c0 .816-.66 1.477-1.477 1.477H6.462a2.954 2.954 0 0 1-2.954-2.954m16.984-2.954V3.877c0-.816-.66-1.477-1.477-1.477H8.308m-4.8 16.246V5.354A2.954 2.954 0 0 1 6.462 2.4h1.846m3.75 4.43h4.05m-4.05 4.431h4.05m-7.8 4.339V2.4"
    })
  ]))
}