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
      "stroke-width": "2",
      opacity: ".9"
    }, [
      _createElementVNode("path", { d: "M17.625 12a5.63 5.63 0 0 1-4.63 5.537c-.543.097-.995-.36-.995-.912v-9.25c0-.552.451-1.01.995-.912A5.63 5.63 0 0 1 17.625 12Z" }),
      _createElementVNode("path", {
        d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
        "clip-rule": "evenodd"
      })
    ])
  ]))
}