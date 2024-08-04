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
      d: "M17.333 21.6a4.267 4.267 0 0 1-4.266-4.267v-12.8A2.133 2.133 0 0 1 15.2 2.4h4.267A2.133 2.133 0 0 1 21.6 4.533v12.8a4.266 4.266 0 0 1-4.267 4.267m0 0h-12.8A2.134 2.134 0 0 1 2.4 19.467V15.2a2.133 2.133 0 0 1 2.133-2.133h2.454m6.08-6.027-2.134-2.133a2.133 2.133 0 0 0-3.016 0L4.9 7.923a2.133 2.133 0 0 0 0 3.017l9.6 9.6m2.833-3.207v.01"
    })
  ]))
}