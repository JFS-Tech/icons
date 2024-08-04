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
    _createElementVNode("g", { "clip-path": "url(#a)" }, [
      _createElementVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M3.6 9.395 20.4 16.8m0-9.6L3.6 14.605M17.4 12l-.023.024M22.224 12l-.024.024M4.8 9.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2m0 12a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2"
      })
    ]),
    _createElementVNode("defs", null, [
      _createElementVNode("clipPath", { id: "a" }, [
        _createElementVNode("path", {
          fill: "#fff",
          d: "M24 0v24H0V0z"
        })
      ])
    ])
  ]))
}