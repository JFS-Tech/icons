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
      d: "m6.375 17.625 11.25-11.25M8.25 10.75v-2.5m0 0v-2.5m0 2.5h-2.5m2.5 0h2.5m2.5 8.125h5M4.703 22h14.594A2.703 2.703 0 0 0 22 19.297V4.703A2.703 2.703 0 0 0 19.297 2H4.703A2.703 2.703 0 0 0 2 4.703v14.594A2.703 2.703 0 0 0 4.703 22"
    })
  ]))
}