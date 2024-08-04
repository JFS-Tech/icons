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
      d: "m2.877 15.398 3.817 1.908 1.909 3.817 1.908-1.909v-2.862l3.34-3.34 2.862 8.588 2.863-2.863-2.386-9.065 3.817-3.817a2.024 2.024 0 1 0-2.862-2.862L14.328 6.81 5.263 4.424 2.4 7.287l8.588 2.862-3.34 3.34H4.786z"
    })
  ]))
}