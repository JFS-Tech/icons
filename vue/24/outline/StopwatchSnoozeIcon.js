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
      d: "m18.26 6.852 2.088-2.087m0 0-1.252-1.252m1.252 1.252L21.6 6.017M9.413 10.913H14.5L9.413 16H14.5m-5-14h5m6 11.429C20.5 18.162 16.694 22 12 22s-8.5-3.838-8.5-8.571c0-4.734 3.806-8.572 8.5-8.572s8.5 3.838 8.5 8.572"
    })
  ]))
}